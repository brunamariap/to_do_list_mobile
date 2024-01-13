import { Text, TouchableOpacity, View } from "react-native";
import { TaskContentContainer, CheckBox, Container } from "./styles";
import theme from "../../styles/themes";
import { FaRegTrashCan } from "react-icons/fa6";
import { Task } from "../../interfaces/Task";
import { Description, Info, Title } from "../../styles/global";
import { formatDate } from "../../utils/formatDate";

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
					<Info>{formatDate(createdAt)}</Info>
					{description && <Description>{description}</Description>}
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