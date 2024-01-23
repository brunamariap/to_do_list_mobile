import { useTask } from "../../contexts/TaskContext";
import ResourceCard from "../ResourceCard"
import { Container } from "./styles";

const ResourceCardsContainer = () => {

	const { totalTasks, totalPendingTasks, totalFinishedTasks } = useTask();

	return (
		<Container>
			<ResourceCard title='Cadastradas' total={totalTasks} />
			<ResourceCard title='Pendentes' total={totalPendingTasks} />
			<ResourceCard title='Concluídas' total={totalFinishedTasks} />
		</Container>
	)
}

export default ResourceCardsContainer;