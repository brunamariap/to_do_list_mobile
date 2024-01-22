import ResourceCardsContainer from '../../components/ResourceCardsContainer';
import TasksContainer from '../../components/TasksContainer';
import TaskCard from '../../components/TaskCard.py';
import { TaskData } from '../../interfaces/Task';
import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar';
import Logo from '../../assets/images/logo.svg';
import { useNavigation } from '@react-navigation/native';
import { ScreenContainerMain, Scrool } from '../../styles/global';
import { useTask } from '../../contexts/TaskContext';

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

const Pending = () => {

	const navigation = useNavigation();

	// const [tasks, setTasks] = useState<TaskData[]>(TASKS);

	const {
		pendingTasks,
		setTasks,
		setPendingTasks,
		getPendingTasks,
	} = useTask();

	useEffect(() => {
		getPendingTasks();
	}, [])

	const handleCheckTask = (taskId: number | string, newStatus: string) => {
		setPendingTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ?
					{
						...task,
						status: newStatus,
						isChecked: newStatus === "finished"
					} : task
			)
		);
		// getPendingTasks();
	}

	return (
		<ScreenContainerMain>
			<Logo />
			<Scrool
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					marginTop: 8,
					rowGap: 24,
					flexGrow: 1,
				}}
			>

				<SearchBar
					placeholder='Pesquisar tarefa'
				/>
				<ResourceCardsContainer />

				<TasksContainer>
					{pendingTasks?.map(({
						id,
						title,
						description,
						status,
						createdAt,
						isChecked
					}) => (
						<TaskCard
							key={id}
							taskId={id}
							title={title}
							description={description}
							status={status}
							createdAt={createdAt}
							isChecked={isChecked}
							onPress={() => navigation.navigate('TaskDetails')}
							setStatus={() => handleCheckTask(id, "finished")}
						/>
					))}
				</TasksContainer>


			</Scrool>
		</ScreenContainerMain>
	);
}

export default Pending;
