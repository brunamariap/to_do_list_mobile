import styled from "styled-components/native";
import theme from "../../styles/themes";

const Container = styled.SafeAreaView`
	flex: 1;
	gap: 8px;
	background-color: ${theme.colors.whiteTransparent};
	border-color: ${theme.colors.white};
	align-items: center;
	justify-content: center;
	padding: 8px 4px;
	border: 1px solid ${theme.colors.white};
	border-radius: 8px;
`;

const ResourceCardText = styled.Text`
	color: ${theme.colors.black};
	font-family: ${theme.fonts.semibold};
`;

export { Container, ResourceCardText };