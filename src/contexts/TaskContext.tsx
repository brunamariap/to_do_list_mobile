import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { TaskData } from "../interfaces/Task";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid"
import { Alert } from "react-native";

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
	isLoadingCreateTask: boolean;
	setIsLoadingCreateTask: React.Dispatch<React.SetStateAction<boolean>>

	createTask: (task: TaskData) => Promise<void>;
	removeTask: (task: string | number) => Promise<void>;
	handleCheckTask: (taskID: string | number, newStatus: string) => void;
}

const TaskContext = createContext({} as TaskContextValues);

const tasksKey = "@to-do-list:tasks"

const TaskProvider = ({ children }: TaskProviderProps) => {
	const [task, setTask] = useState<TaskData | undefined>();
	const [tasks, setTasks] = useState<TaskData[] | undefined>([]);
	const [pendingTasks, setPendingTasks] = useState<TaskData[] | undefined>([]);
	const [finishedTasks, setFinishedTasks] = useState<TaskData[] | undefined>([]);

	const [count, setCount] = useState(0);

	const [isLoadingPendingTasks, setIsLoadingPendingTasks] = useState(true);
	const [isLoadingCreateTask, setIsLoadingCreateTask] = useState(false);

	const getTask = useCallback(async (taskId: string | number) => {
		setTask(tasks?.find((task) => {
			return task.id == taskId;
		}))
	}, [tasks])

	async function storeTasks(newTasks: TaskData[]) {
		try {
			await AsyncStorage.setItem("@tasks", JSON.stringify(newTasks));
		} catch (e) {
			Alert.alert("Erro", "Não foi possível salvar as tarefas");
		}
	}

	const getAllTasks = useCallback(async () => {
		try {
			const data = await AsyncStorage.getItem("@tasks");
			if (data) {
				const parsedData = JSON.parse(data);
				setTasks(parsedData);
			}
			console.log(data)
		} catch (e) {
			Alert.alert("Erro", "Não foi possível carregar as tarefas");
		}
	}, [])

	const getPendingTasks = useCallback(async () => {
		await getAllTasks();
		setPendingTasks(tasks?.filter((task) => {
			return task.status === "pending";
		}))
	}, [tasks, getAllTasks])

	const getFinishedTasks = useCallback(async () => {
		await getAllTasks();
		setFinishedTasks(tasks?.filter((task) => {
			return task.status === "finished";
		}))
	}, [tasks, getAllTasks])

	const createTask = useCallback(async (title: string, description?: string) => {
		setIsLoadingCreateTask(true);
		const newTask: TaskData = {
			id: uuid.v4(),
			title: title,
			description: description,
			status: "pending",
			// createdAt: new Date(),
			isChecked: false,
		}
		setTasks((prevTasks) => (prevTasks ? [...prevTasks, newTask] : [newTask]));

		await getPendingTasks();
		await getFinishedTasks();
		setIsLoadingCreateTask(false);
	}, [tasks, getPendingTasks, getFinishedTasks]);

	const removeTask = useCallback(async (taskId: string | number) => {
		setTasks((prevTasks) =>
			prevTasks?.filter((task) => task.id != taskId)
		);
		await getAllTasks();
		await getPendingTasks();
		await getFinishedTasks();
	}, [getAllTasks, getPendingTasks, getFinishedTasks]);

	const handleCheckTask = useCallback(async (taskId: number | string, newStatus: string) => {
		// @ts-expect-error
		setTasks((prevTasks) =>
			prevTasks?.map((task) =>
				task.id === taskId ?
					{
						...task,
						status: newStatus,
						isChecked: newStatus === "finished"
					} : task
			)
		);
		await getAllTasks();
		await getPendingTasks();
		await getFinishedTasks();
	}, [tasks, getAllTasks, getPendingTasks, getFinishedTasks])

	useEffect(() => {
		getAllTasks();
		getPendingTasks();
		getFinishedTasks();
	}, [])

	useEffect(() => {
		// AsyncStorage.clear()
		// getPendingTasks();
		// getFinishedTasks();
		storeTasks(tasks)
	}, [tasks])

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
		isLoadingCreateTask,
		setIsLoadingCreateTask,

		createTask,
		removeTask,
		handleCheckTask,
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
