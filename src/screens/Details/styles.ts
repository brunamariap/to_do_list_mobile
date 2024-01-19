import { Platform } from "react-native";
import styled from "styled-components/native";
import theme from "../../styles/themes";

const Container = styled.SafeAreaView`
	flex: 1;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding-top: ${Platform.OS === "android" ? 56 : 0}px;
	background-color: ${theme.colors.white};
`;

export { Container };