import { Text, TouchableOpacity, View } from "react-native";
import { Task } from "../../interfaces/Task";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { formatDate } from "../../utils/formatDate";
import ConfirmModal from "../ConfirmModal";
import { useState } from "react";

import theme from "../../styles/themes";
import { Description, Info, Title } from "../../styles/global";
import { TaskContentContainer, CheckBox, Container } from "./styles";

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

	const [modalVisible, setModalVisible] = useState(false);

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
			<TouchableOpacity style={{ marginRight: 16 }}
				onPress={() => setModalVisible(true)}
			>
				<MaterialCommunityIcons name="trash-can-outline" size={32} color={theme.colors.red} />
				{modalVisible && (
					<ConfirmModal
						// visible={modalVisible}
						// setVisible={() => setModalVisible(false)}
					/>
				)}
			</TouchableOpacity>
		</Container>
	)
}

export default TaskCard;