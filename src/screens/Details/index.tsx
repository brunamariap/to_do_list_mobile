import { Text } from "react-native";
import { Container } from "./styles";
import Heading from "../../components/Heading";

const TaskDetails = () => {
	return (
		<Container>
			<Heading
				title="Nome tarefa"
				description="12 nov. 2023"
			/>
		</Container>
	)
}

export default TaskDetails;