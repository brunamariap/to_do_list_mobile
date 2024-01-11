import { StatusBar } from 'expo-status-bar';
import { Container, Scrool } from './styles';
import ResourceCard from '../../components/ResourceCard';
import theme from '../../styles/themes';
import ResourceCardsContainer from '../../components/ResourceCardsContainer';
import TasksContainer from '../../components/TasksContainer';
import TaskCard from '../../components/TaskCard.py';
import { FlatList } from 'react-native';

export default function Pending() {
	return (
		<Container style={{ backgroundColor: theme.colors.primaryTransparent60 }}>
			<Scrool
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					gap: 16,
					flexGrow: 1,
				}}
			>
				<ResourceCardsContainer />
				
				{/* usar flatList */}
				<TasksContainer>
					{/* <FlatList
						data={tasks}
					/> */}
					<TaskCard />
					<TaskCard isChecked />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
				</TasksContainer>
			</Scrool>
		</Container>
	);
}
