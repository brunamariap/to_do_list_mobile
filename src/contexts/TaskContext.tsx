import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { TaskData } from "../interfaces/Task";

const TASKS: TaskData[] = [
	{
		id: 1,
		title: "Estudar React",
		description: "sdyyfb",
		status: "finished",
		createdAt: new Date(),
		isChecked: true,
	},
	{
		id: 2,
		title: "Estudar Django",
		description: "sdyyfbdbfdfd jdbyhbdybyfbe ndbfybeuwnme",
		status: "pending",
		createdAt: new Date(),
		isChecked: false,
	},
	{
		id: 3,
		title: "Almoçar",
		status: "pending",
		createdAt: new Date(),
		isChecked: false,
	},
	{
		id: 4,
		title: "Ler um livro",
		status: "pending",
		createdAt: new Date(),
		isChecked: false,
	},
	{
		id: 5,
		title: "Ler um livro",
		status: "pending",
		createdAt: new Date(),
		isChecked: false,
	},
	{
		id: 6,
		title: "Ler um livro",
		status: "pending",
		createdAt: new Date(),
		isChecked: false,
	},
	{
		id: 7,
		title: "Ler um livro",
		status: "pending",
		createdAt: new Date(),
		isChecked: false,
	},
]

interface TaskProviderProps {
	children: React.ReactNode;
}

interface TaskContextValues {
	task: TaskData | undefined;
	setTask: React.Dispatch<React.SetStateAction<TaskData | undefined>>
	tasks: TaskData[] | undefined;
	setTasks: React.Dispatch<React.SetStateAction<TaskData[] | undefined>>
	pendingTasks: TaskData[] | undefined;
	setPendingTasks: React.Dispatch<React.SetStateAction<TaskData[] | undefined>>
	finishedTasks: TaskData[] | undefined;
	setFinishedTasks: React.Dispatch<React.SetStateAction<TaskData[] | undefined>>
	
	getTask: (TaskId: string) => Promise<void>;
	getAllTasks: () => Promise<void>;
	getPendingTasks: () => Promise<void>;
	getFinishedTasks: () => Promise<void>;
	
	isLoadingPendingTasks: boolean;
	setIsLoadingPendingTasks: React.Dispatch<React.SetStateAction<boolean>>

	createTask: (task: TaskData) => Promise<void>;
	removeTask: (task: string | number) => Promise<void>;
}

const TaskContext = createContext({} as TaskContextValues);

const TaskProvider = ({ children }: TaskProviderProps) => {
	const [task, setTask] = useState<TaskData | undefined>();
	const [tasks, setTasks] = useState<TaskData[] | undefined>(TASKS);
	const [pendingTasks, setPendingTasks] = useState<TaskData[] | undefined>();
	const [finishedTasks, setFinishedTasks] = useState<TaskData[] | undefined>();

	const [tasksLoaded, setTasksLoaded] = useState(false);

	const [isLoadingPendingTasks, setIsLoadingPendingTasks] = useState(true);

	const getTask = useCallback(async (taskId: string | number) => {
		setTask(tasks?.find((task) => {
			return task.id == taskId;
		}))
	}, [tasks])

	const getAllTasks = useCallback(async () => {
		// if (!tasksLoaded) {
		// 	setTasks(TASKS);
		// }
		// setTasksLoaded(true);
	}, [])

	const getPendingTasks = useCallback(async () => {
		if (tasksLoaded) {
			await getAllTasks();
		}
		setPendingTasks(tasks?.filter((task) => {
			return task.status === "pending";
		}))
	}, [tasks])

	const getFinishedTasks = useCallback(async () => {
		await getAllTasks();
		setFinishedTasks(tasks?.filter((task) => {
			return task.status === "finished";
		}))
	}, [tasks])

	const createTask = useCallback(async (newTask: TaskData) => {
		setTasks((prevTasks) => (prevTasks ? [...prevTasks, newTask] : [newTask]));
		// getAllTasks();
		await getPendingTasks();
		await getFinishedTasks();
	}, [getPendingTasks, getFinishedTasks]);

	const removeTask = useCallback(async (taskId: string | number) => {
		setTasks((prevTasks) =>
			prevTasks?.filter((task) => task.id != taskId)
		);
		await getPendingTasks();
		await getFinishedTasks();
	}, [getPendingTasks, getFinishedTasks]);

	useEffect(() => {
		if (!tasksLoaded) {
			getAllTasks();
		}
		getPendingTasks();
		getFinishedTasks();
	}, [getAllTasks, getPendingTasks, getFinishedTasks, tasksLoaded])

	const contextValues = {
		task,
		setTask,
		tasks,
		setTasks,
		pendingTasks,
		setPendingTasks,
		finishedTasks,
		setFinishedTasks,

		getTask,
		getAllTasks,
		getPendingTasks,
		getFinishedTasks,

		isLoadingPendingTasks,
		setIsLoadingPendingTasks,

		createTask,
		removeTask,
	}

	return (
		<TaskContext.Provider value={contextValues}>
			{children}
		</TaskContext.Provider>
	)
}

const useTask = () => {
	const context = useContext(TaskContext);

	return context;
};

export { TaskProvider, useTask }
