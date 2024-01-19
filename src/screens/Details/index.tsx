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

const TaskDetails = () => {

	const { goBack } = useNavigation()

	return (
		<Container>
			<MainContainer>
				<BackScreenContainer onPress={() => goBack()}>
					<Ionicons name="chevron-back-outline" size={32} color={theme.colors.black} />
					<Title>Voltar</Title>
				</BackScreenContainer>
				<Heading
					title="Nome tarefa"
					description="12 nov. 2023"
				/>

				<DescriptionContainer>
					<DescriptionText>
						wndueufumfemmfoeof
						efijefiee,
						denifewndueufumfemmfoeofdjenfuf
						efijefiee,
						denifen
						wndueufumfemmfoeof
						efijefiee,
						denifen
						wndueufumfemmfoeof
						efijefiee,
						denifen
						wndueufumfemmfoeof
						efijefiee,
						denifen
					</DescriptionText>
				</DescriptionContainer>
			</MainContainer>
		</Container>
	)
}

export default TaskDetails;