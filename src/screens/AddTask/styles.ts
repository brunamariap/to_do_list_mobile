import styled from "styled-components/native";
import theme from "../../styles/themes";
import { Platform } from "react-native";

interface StyledButtonTextProps {
	type?: "cancel" | "primary";
};

const Container = styled.SafeAreaView`
	flex: 1;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding-top: ${Platform.OS === "android" ? 56 : 0}px;
	background-color: ${theme.colors.white};
`;

const MainContainer = styled.SafeAreaView`
	bottom: 112px;
	width: 90%;
	align-items: flex-start;
	gap: 16px;
`;

const InputsContainer = styled.SafeAreaView`
	width: 100%;
	gap: 16px;
`;

const ButtonsContainer = styled.SafeAreaView`
	top: 224px;
	width: 100%;
	gap: 16px;
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
	MainContainer,
	InputsContainer,
	ButtonsContainer,
	TextButton
};