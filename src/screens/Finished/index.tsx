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
		getTask,
		handleCheckTask,
	} = useTask();

	const handleDetailsTask = (taskId: string | number) => {
		// @ts-ignore
		getTask(taskId);
		// @ts-ignore
		navigation.navigate('TaskDetails')
	};

	const filteredTasks = tasks?.filter(
		({ title, description, status }) =>
			status === "finished" &&(
			title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			description?.toLowerCase().includes(searchQuery.toLowerCase()))
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
					{filteredTasks?.map((task, index) => (
						<TaskCard
							key={index}
							taskId={task.id}
							title={task.title}
							description={task.description}
							status={task.status}
							createdAt={task.createdAt}
							isChecked={task.isChecked}
							onPress={() => handleDetailsTask(task.id)}
							setStatus={() => handleCheckTask(task.id, "pending")}
						/>
					))}
				</TasksContainer>


			</Scrool>
		</ScreenContainerMain>
	);
}

export default Finished;