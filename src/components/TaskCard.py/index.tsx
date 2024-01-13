import { Text, TouchableOpacity, View } from "react-native";
import { TaskContentContainer, CheckBox, Container } from "./styles";
import theme from "../../styles/themes";
import { FaRegTrashCan } from "react-icons/fa6";
import { Task } from "../../interfaces/Task";
import { Title } from "../../styles/global";

interface TaskCardProps {
	isChecked?: boolean;
}

const TaskCard = ({
	id,
	title,
	description,
	status,
	createdAt
}: Task) => {

	const TaskContent = () => {
		return (
			<TaskContentContainer>
				<CheckBox status={status} />
				<View>
					<Title>{title}</Title>
					{description && <Text>{description}</Text>}
				</View>
			</TaskContentContainer>
		)
	}

	return (
		<Container status={status}>
			<TaskContent />
		</Container>
	)
}

export default TaskCard;