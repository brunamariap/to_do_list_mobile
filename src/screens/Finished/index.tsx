import ResourceCardsContainer from '../../components/ResourceCardsContainer';
import TasksContainer from '../../components/TasksContainer';
import TaskCard from '../../components/TaskCard.py';
import { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar';
import Logo from '../../assets/images/logo.svg';
import { useNavigation } from '@react-navigation/native';
import { ScreenContainerMain, Scrool } from '../../styles/global';
import { useTask } from '../../contexts/TaskContext';

const Finished = () => {

	const navigation = useNavigation();

	const [searchQuery, setSearchQuery] = useState('');

	const {
		tasks,
		finishedTasks,
		getTask,
		setTasks,
		getFinishedTasks,
	} = useTask();

	useEffect(() => {
		getFinishedTasks();
	}, [])

	const handleCheckTask = (taskId: number | string, newStatus: string) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ?
					{
						...task,
						status: newStatus,
						isChecked: newStatus === "finished"
					} : task
			)
		);
	}

	const handleDetailsTask = (taskId: string | number) => {
		getTask(taskId);
		navigation.navigate('TaskDetails')
	};

	const filteredTasks = finishedTasks?.filter(
    ({ title, description }) =>
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
					onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
				/>
				<ResourceCardsContainer />

				<TasksContainer>
					{filteredTasks?.map(({
						id, title, description, status, createdAt, isChecked
					}) => (
						<TaskCard
							key={id}
							taskId={id}
							title={title}
							description={description}
							status={status}
							createdAt={createdAt}
							isChecked={isChecked}
							onPress={() => handleDetailsTask(id)}
							setStatus={() => handleCheckTask(id, "pending")}
						/>
					))}
				</TasksContainer>


			</Scrool>
		</ScreenContainerMain>
	);
}

export default Finished;