import { Container, Scrool } from './styles';
import ResourceCardsContainer from '../../components/ResourceCardsContainer';
import TasksContainer from '../../components/TasksContainer';
import TaskCard from '../../components/TaskCard.py';
import { Task } from '../../interfaces/Task';
import { useState } from 'react';

const TASKS: Task[] = [
	{
		id: 1,
		title: "Estudar React",
		status: "finished",
		createdAt: new Date(),
	},
	{
		id: 2,
		title: "Estudar Django",
		description: "sdyyfbdbfdfd jdbyhbdybyfbe ndbfybeuwnme",
		status: "pending",
		createdAt: new Date(),
	},
	{
		id: 3,
		title: "Almoçar",
		status: "pending",
		createdAt: new Date(),
	},
	{
		id: 4,
		title: "Ler um livro",
		status: "pending",
		createdAt: new Date(),
	},
]

export default function Pending() {

	const [tasks, setTasks] = useState<Task[]>(TASKS);

	return (
		<Container>
			<Scrool
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					gap: 16,
					flexGrow: 1,
				}}
			>
				<ResourceCardsContainer />

				<TasksContainer>
					{tasks.map(({ id, title, description, status, createdAt }) => (
						<TaskCard
							key={id}
							id={id}
							title={title}
							description={description}
							status={status}
							createdAt={createdAt}
						/>
					))}
				</TasksContainer>

				
			</Scrool>
		</Container>
	);
}
