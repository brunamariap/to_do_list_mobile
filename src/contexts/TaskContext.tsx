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

	getTask: (TaskId: string) => Promise<void>;
	getAllTasks: () => Promise<void>;

	isLoadingCreateTask: boolean;
	setIsLoadingCreateTask: React.Dispatch<React.SetStateAction<boolean>>

	createTask: (title: string, description: string) => Promise<void>;
	removeTask: (task: string | number) => Promise<void>;
	handleCheckTask: (taskID: string | number, newStatus: string) => void;
}

const TaskContext = createContext({} as TaskContextValues);

const tasksKey = "@to-do-list:tasks"

const TaskProvider = ({ children }: TaskProviderProps) => {
	const [task, setTask] = useState<TaskData | undefined>();
	const [tasks, setTasks] = useState<TaskData[] | undefined>([]);

	const [isLoadingCreateTask, setIsLoadingCreateTask] = useState(false);

	const getTask = useCallback(async (taskId: string | number) => {
		setTask(tasks?.find((task) => {
			return task.id == taskId;
		}))
	}, [tasks])

	const storeTasks = async (newTasks: TaskData[]) => {
		try {
			const serializedTasks = JSON.stringify(tasks, (key, value) => {
				if (key === 'createdAt') {
					return value.toString();
				}
				return value;
			});
			await AsyncStorage.setItem(tasksKey, serializedTasks);
		} catch (e) {
			Alert.alert("Erro", "Não foi possível salvar as tarefas");
		}
	}

	const getAllTasks = useCallback(async () => {
		try {
			const data = await AsyncStorage.getItem(tasksKey);
			if (data) {
				const parsedTasks = JSON.parse(data, (key, value) => {
					if (key === 'createdAt') {
						return new Date(value);
					}
					return value;
				});
				setTasks(parsedTasks);
			}
			console.log(data)
		} catch (e) {
			Alert.alert("Erro", "Não foi possível carregar as tarefas");
		}
	}, [])

	const createTask = useCallback(async (title: string, description?: string) => {
		setIsLoadingCreateTask(true);
		const newTask: TaskData = {
			id: uuid.v4(),
			title: title,
			description: description,
			status: "pending",
			createdAt: new Date(),
			isChecked: false,
		}
		setTasks((prevTasks) => (prevTasks ? [...prevTasks, newTask] : [newTask]));
		setIsLoadingCreateTask(false);
	}, []);

	const removeTask = useCallback(async (taskId: string | number) => {
		setTasks((prevTasks) =>
			prevTasks?.filter((task) => {
				return task.id != taskId
			})
		);
	}, []);

	const handleCheckTask = (taskId: number | string, newStatus: string) => {
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
	}

	useEffect(() => {
		getAllTasks();
	}, [])

	useEffect(() => {
		storeTasks(tasks)
	}, [tasks])

	const contextValues = {
		task,
		setTask,
		tasks,
		setTasks,

		getTask,
		getAllTasks,

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