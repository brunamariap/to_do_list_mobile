import styled from "styled-components/native";
import theme from "../../styles/themes";

const ContainerBase = styled.View`
	width: 90%;
	border-radius: 8px;
	padding: 16px;
`;

const TaskPending = styled(ContainerBase)`
	background-color: ${theme.colors.darkTransparent};
`;

const TaskFinished = styled(ContainerBase)`
	background-color: ${theme.colors.greenTransparent};
`;

const TaskContentContainer = styled.SafeAreaView`
	flex: 1;
	flex-direction: row;
	gap: 8px;
	align-items: center;
`;

const TextContainer = styled.SafeAreaView`

`;

const CheckBox = styled.TouchableOpacity`
	width: 22px;
	height: 22px;
	border-width: 2px;
	border-radius: 4px;
`;

export { TaskPending, TaskFinished, TaskContentContainer, TextContainer };