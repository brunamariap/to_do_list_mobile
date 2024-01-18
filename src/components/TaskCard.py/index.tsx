import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
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
import { Trash2 } from "react-native-feather";

interface TaskCardProps extends TouchableOpacityProps {
	taskId: string | number;
	title: string;
	description?: string;
	status: "pending" | "finished";
	createdAt: Date;
}

const TaskCard = ({
	taskId,
	title,
	description,
	status,
	createdAt,
	...props
}: TaskCardProps) => {

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
		<Container status={status} {...props}>
			<TaskContent />
			<TouchableOpacity style={{ marginRight: 16 }}
				onPress={() => toggleDeleteTaskModal()}
			>
				<Trash2
					width={28}
					height={28}
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