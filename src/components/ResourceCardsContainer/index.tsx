import { useTask } from "../../contexts/TaskContext";
import ResourceCard from "../ResourceCard"
import { Container } from "./styles";

const ResourceCardsContainer = () => {

	const { tasks } = useTask();

	return (
		<Container>
			<ResourceCard title='Cadastradas' total={tasks?.length} />
			<ResourceCard title='Pendentes' total={tasks?.filter((task) => task.status === "pending").length} />
			<ResourceCard title='Concluídas' total={tasks?.filter((task) => task.status === "finished").length} />
		</Container>
	)
}

export default ResourceCardsContainer;