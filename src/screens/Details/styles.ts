import { Platform, TouchableOpacityProps } from "react-native";
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

const MainContainer = styled.SafeAreaView`
	bottom: 240px;
	width: 90%;
	align-items: flex-start;
	gap: 16px;
`;

const BackScreenContainer = styled.TouchableOpacity<TouchableOpacityProps>`
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const DescriptionContainer = styled.SafeAreaView`
	width: 100%;
`;

const DescriptionText = styled.Text`
	font-family: ${theme.fonts.regular};
	font-size: ${theme.sizes.base}px;
	color: ${theme.colors.black};
`;

export {
	Container,
	MainContainer,
	BackScreenContainer,
	DescriptionContainer,
	DescriptionText,
};