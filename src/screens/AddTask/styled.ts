import styled from "styled-components/native";
import theme from "../../styles/themes";
import { Platform } from "react-native";

const Container = styled.SafeAreaView`
	flex: 1;
	justify-content: center;
	align-items: center;
	width: 100%;
	/* padding: 0 24px; */
	padding-top: ${Platform.OS === "android" ? 56 : 0}px;
	background-color: ${theme.colors.white};
`;

const MainContainer = styled.SafeAreaView`
	width: 90%;
	align-items: flex-start;
	gap: 24px;
`;

const InputsContainer = styled.SafeAreaView`

`;

export { Container, MainContainer, InputsContainer };