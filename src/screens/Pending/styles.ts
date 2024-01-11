import { Platform } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
	flex: 1;
	justify-content: center;
	align-items: center;
	width: 100%;
	/* padding: 0 24px; */
	/* padding-top: ${Platform.OS === "android" ? 56 : 0}px; */
`;

const Scrool = styled.ScrollView`
	flex: 1;
	width: 100%;
`;

export { Container, Scrool };