import { useTask } from "../../contexts/TaskContext";
import ResourceCard from "../ResourceCard"
import { Container } from "./styles";

const ResourceCardsContainer = () => {

	const {
		getAllTasks,
		getPendingTasks,
		getFinishedTasks,
		tasks,
		pendingTasks, 
		finishedTasks,
	} = useTask();

	return (
		<Container>
			<ResourceCard title='Cadastradas' total={tasks?.length} />
			<ResourceCard title='Pendentes' total={pendingTasks?.length} />
			<ResourceCard title='Concluídas' total={finishedTasks?.length} />
		</Container>
	)
}

export default ResourceCardsContainer;