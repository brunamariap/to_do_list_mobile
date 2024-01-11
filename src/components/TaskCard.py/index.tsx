import { Text, TouchableOpacity, View } from "react-native";
import { TaskContentContainer, TaskFinished, TaskPending } from "./styles";
import CheckBox from "../CheckBox";
import theme from "../../styles/themes";
import { FaRegTrashCan } from "react-icons/fa6";

interface TaskCardProps {
	isChecked?: boolean;
}

const TaskCard = ({ isChecked = false }: TaskCardProps) => {

	const TaskContent = () => {
		return (
			<TaskContentContainer>
				{/* <CheckBox taskId={'1'} /> */}
				<TouchableOpacity style={{
					width: 22,
					height: 22,
					borderWidth: 2,
					borderColor: theme.colors.dark,
					borderRadius: 4,
				}}></TouchableOpacity>
				<View>
					<Text>Texto de teste</Text>
					<Text>Descrição de teste</Text>
				</View>
			</TaskContentContainer>
		)
	}

	return (
		<>
			{!isChecked ? (
				<TaskPending>
					<TaskContent />
				</TaskPending>
			) : (
				<TaskFinished>
					<TaskContent />
				</TaskFinished>
			)}
		</>
	)
}

export default TaskCard;