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

	totalTasks: number;
	totalPendingTasks: number;
	totalFinishedTasks: number;

	loading: boolean;
	refreshData: () => void;

	getTask: (TaskId: string) => Promise<void>;
	getAllTasks: () => Promise<void>;
	getPendingTasks: () => Promise<void>;
	getFinishedTasks: () => Promise<void>;
}

const TaskContext = createContext({} as TaskContextValues);

const TaskProvider = ({ children }: TaskProviderProps) => {
	const [task, setTask] = useState<TaskData | undefined>();
	const [tasks, setTasks] = useState<TaskData[] | undefined>();
	const [pendingTasks, setPendingTasks] = useState<TaskData[] | undefined>();
	const [finishedTasks, setFinishedTasks] = useState<TaskData[] | undefined>();

	const [totalTasks, setTotalTasks] = useState(0);
	const [totalPendingTasks, setTotalPendingTasks] = useState(0);
	const [totalFinishedTasks, setTotalFinishedTasks] = useState(0);

	const [loading, setLoading] = useState(false)

	const getTask = useCallback(async (taskId: string | number) => {
		setTask(tasks?.find((task) => {
			return task.id == taskId;
		}))
	}, [tasks])

	const getAllTasks = useCallback(async () => {
		setTasks(TASKS);
	}, [])

	const getPendingTasks = useCallback(async () => {
		await getAllTasks();
		setPendingTasks(tasks?.filter((task) => {
			return task.status === "pending";
		}))
		console.log(pendingTasks, 'dhbbgygygs')
	}, [tasks])

	const getFinishedTasks = useCallback(async () => {
		await getAllTasks();
		setFinishedTasks(tasks?.filter((task) => {
			return task.status === "finished";
		}))
	}, [tasks])

	const getTotalResources = useCallback(async () => {
		// await Promise.all([getAllTasks(), getPendingTasks(), getFinishedTasks()]);

		setTotalTasks(tasks?.length);
		setTotalPendingTasks(pendingTasks?.length)
		setTotalFinishedTasks(finishedTasks?.length)

	}, [getAllTasks, tasks, pendingTasks, getPendingTasks, getFinishedTasks, finishedTasks])


	useEffect(() => {
		getAllTasks();
		getPendingTasks();
		getFinishedTasks();
	}, [getAllTasks, getPendingTasks, getFinishedTasks])

	const contextValues = {
		task,
		setTask,
		tasks,
		setTasks,
		pendingTasks,
		setPendingTasks,
		finishedTasks,
		setFinishedTasks,

		totalTasks,
		totalPendingTasks,
		totalFinishedTasks,

		getTask,
		getAllTasks,
		getPendingTasks,
		getFinishedTasks,
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
