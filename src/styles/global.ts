import styled from "styled-components/native";
import theme from "./themes";
import { Platform } from "react-native";

interface StyledTabLabel {
	focused: boolean;
}

const ScreenContainerMain = styled.SafeAreaView`
	flex: 1;
	justify-content: center;
	align-items: center;
	width: 100%;
	/* padding: 0 24px; */
	padding-top: ${Platform.OS === "android" ? 56 : 0}px;
	background-color: ${theme.colors.primaryTransparent60};
`;

const Scrool = styled.ScrollView`
	flex: 1;
	width: 100%;
`;

const ContainerCenter = styled.SafeAreaView`
	flex: 1;
	justify-content: center;
	align-items: center;
	/* margin-top: 22px; */
`;

const Title = styled.Text`
	font-family: ${theme.fonts.semibold};
	font-size: ${theme.sizes.md}px;
	color: ${theme.colors.black};
`;

const Description = styled.Text`
	font-family: ${theme.fonts.semibold};
	font-size: ${theme.sizes.xs}px;
	color: ${theme.colors.gray};
`;

const Info = styled.Text`
	font-family: ${theme.fonts.light};
	font-size: ${theme.sizes.xs}px;
	color: ${theme.colors.gray};
`;

const TabLabel = styled.Text<StyledTabLabel>`
	color: ${(props) => (
		props.focused ? theme.colors.primary : theme.colors.gray
	)
	};
	font-family: ${theme.fonts.semibold};
	font-size: ${theme.sizes.xs}px;
	margin-bottom: 8px;
`;

const ErrorText = styled.Text`
	color: ${theme.colors.red};
	font-family: ${theme.fonts.light};
	font-size: ${theme.sizes.xs}px;
`;

export {
	ScreenContainerMain,
	Scrool,
	Title,
	Description,
	Info, 
	ContainerCenter,
	TabLabel,
	ErrorText,
};