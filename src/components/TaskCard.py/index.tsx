import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Task } from "../../interfaces/Task";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { formatDate } from "../../utils/formatDate";
import Modal from "../Modal";
import { useState } from "react";

import theme from "../../styles/themes";
import { Description, Info, Title } from "../../styles/global";
import {
	TaskContentContainer,
	CheckBox,
	Container,
	ButtonsContainer,
	TextButton,
	ModalContainer,
	ModalTextDescription
} from "./styles";
import Button from "../Button";

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

	const [showDeleteTaskModal, setShowDeleteTaskModal] = useState(false);

	const toggleDeleteTaskModal = () =>
		setShowDeleteTaskModal((visible) => !visible)

	const TaskContent = () => {
		return (
			<TaskContentContainer>
				<CheckBox status={status} />
				<View>
					<Title>{title}</Title>
					<Info>{formatDate(createdAt)}</Info>
					{description &&
						<Description>
							{description.substring(0, 10)}{description.length > 10 && "..."}
						</Description>
					}
				</View>
			</TaskContentContainer>
		)
	}

	return (
		<Container status={status}>
			<TaskContent />
			<TouchableOpacity style={{ marginRight: 16 }}
				onPress={() => toggleDeleteTaskModal()}
			>
				<MaterialCommunityIcons
					name="trash-can-outline"
					size={32}
					color={theme.colors.red}
				/>
				{showDeleteTaskModal && (
					<Modal
						visible={showDeleteTaskModal}
						setVisible={() => toggleDeleteTaskModal()}
					>
						<ModalContainer>
							<Title>Tem certeza?</Title>
							<ModalTextDescription>Deseja excluir essa tarefa permanentemente?</ModalTextDescription>
							<ButtonsContainer>
								<Button
									width="40%"
									type="primary"
									onPress={() => toggleDeleteTaskModal()}
								>
									<TextButton type="primary">Confirmar</TextButton>
								</Button>
								<Button
									width="40%"
									onPress={() => toggleDeleteTaskModal()}
								>
									<TextButton type="cancel">Cancelar</TextButton>
								</Button>
							</ButtonsContainer>
						</ModalContainer>
					</Modal>
				)}
			</TouchableOpacity>
		</Container>
	)
}

export default TaskCard;