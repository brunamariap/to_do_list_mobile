import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { TaskData } from "../interfaces/Task";
import constructWithOptions from "styled-components/dist/constructors/constructWithOptions";

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

	const getTask = useCallback(async (taskId: string) => {

	}, [])

	const getAllTasks = useCallback(async () => {
		setTasks(TASKS);
	}, [])

	const getPendingTasks = useCallback(async () => {
		getAllTasks();
		setPendingTasks(tasks?.filter((task) => {
			return task.status === "pending";
		}))
		console.log(pendingTasks, 'dhbbgygygs')
	}, [getAllTasks, tasks, setPendingTasks])

	const getFinishedTasks = useCallback(async () => {
		console.log("teste")
	}, [])

	useEffect(() => {
		getAllTasks();
		getPendingTasks();
	}, [tasks])

	// useEffect(() => {

	// }, [tasks])

	const contextValues = {
		task,
		setTask,
		tasks,
		setTasks,
		pendingTasks,
		setPendingTasks,

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
