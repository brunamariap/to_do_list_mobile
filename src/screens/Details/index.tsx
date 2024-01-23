import {
	BackScreenContainer,
	Container,
	DescriptionContainer,
	DescriptionText,
	MainContainer
} from "./styles";
import Heading from "../../components/Heading";
import { Ionicons } from '@expo/vector-icons';
import theme from "../../styles/themes";
import { Title } from "../../styles/global";
import { useNavigation } from "@react-navigation/native";
import { useTask } from "../../contexts/TaskContext";
import { formatDate } from "../../utils/formatDate";

const TaskDetails = () => {

	const { goBack } = useNavigation()
	const { task } = useTask();

	return (
		<Container>
			<MainContainer>
				<BackScreenContainer onPress={() => goBack()}>
					<Ionicons name="chevron-back-outline" size={32} color={theme.colors.black} />
					<Title>Voltar</Title>
				</BackScreenContainer>
				<Heading
					title={task?.title}
					description={formatDate(task?.createdAt)}
				/>

				<DescriptionContainer>
					<DescriptionText>
						{task?.description}
					</DescriptionText>
				</DescriptionContainer>
			</MainContainer>
		</Container>
	)
}

export default TaskDetails;