import styled from "styled-components/native";
import theme from "../../styles/themes";

interface StyledTaskProps {
	status: "pending" | "finished";
};

const Container = styled.View<StyledTaskProps>`
	width: 90%;
	border-radius: 8px;
	padding: 16px;
	height: 88px;
	background-color: ${(props) => (props.status === "finished" ? theme.colors.greenTransparent : theme.colors.darkTransparent)};
	flex-direction: row;
	align-items: center;
`;

const TaskContentContainer = styled.SafeAreaView`
	flex: 1;
	flex-direction: row;
	gap: 8px;
	align-items: center;
	width: 100%;
`;

const TextContainer = styled.SafeAreaView`

`;


const CheckBox = styled.TouchableOpacity<StyledTaskProps>`
	width: 28px;
	height: 28px;
	border-width: 2px;
	border-color: ${(props) => (props.status === "finished" ? theme.colors.green : theme.colors.dark)};
	border-radius: 4px;
`;

export { Container, TaskContentContainer, TextContainer, CheckBox };