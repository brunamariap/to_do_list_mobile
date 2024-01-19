import styled from "styled-components/native";
import theme from "../../styles/themes";
import { TouchableOpacityProps } from "react-native";

interface StyledTaskCardProps extends TouchableOpacityProps {
	status: "pending" | "finished";
};

interface StyledButtonTextProps {
	type?: "cancel" | "primary";
};

const Container = styled.TouchableOpacity<StyledTaskCardProps>`
	width: 90%;
	border-radius: 8px;
	padding: 16px;
	height: 96px;
	background-color: ${(props) => (
		props.status === "finished"
			? theme.colors.greenTransparent
			: theme.colors.darkTransparent
	)};
	flex-direction: row;
	align-items: center;
`;

const TaskContentContainer = styled.SafeAreaView`
	flex: 1;
	flex-direction: row;
	gap: 8px;
	align-items: center;
	width: 100%;
	padding: 8px 0;
`;

const ModalContainer = styled.SafeAreaView`
	margin: 20px;
	background-color: ${theme.colors.white};
	border-radius: 20px;
	padding: 32px;
	align-items: flex-start;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
`;

const ModalTextDescription = styled.Text`
	font-family: ${theme.fonts.regular};
	font-size: ${theme.sizes.md}px;
	color: ${theme.colors.black};
`;

const CheckBox = styled.TouchableOpacity<StyledTaskCardProps>`
	width: 32px;
	height: 32px;
	border-width: 2px;
	border-color: ${(props) => (
		props.status === "finished"
			? theme.colors.green
			: theme.colors.dark
	)};
	border-radius: 4px;
	align-items: center;
	justify-content: center;
`;

const ButtonsContainer = styled.SafeAreaView`
	align-items: center;
	justify-content: center;
	flex-direction: row-reverse;
	gap: 16px;
	margin: 12px 0;
`;

const TextButton = styled.Text<StyledButtonTextProps>`
	font-family: ${theme.fonts.semibold};
	font-size: ${theme.sizes.md}px;
	color: ${(props) => (
		props.type === "primary"
			? theme.colors.white
			: theme.colors.gray
	)};
`;

export {
	Container,
	TaskContentContainer,
	ModalContainer,
	ModalTextDescription,
	CheckBox,
	ButtonsContainer,
	TextButton,
};