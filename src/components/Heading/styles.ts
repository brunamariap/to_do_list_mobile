import styled from "styled-components/native";
import theme from "../../styles/themes";

const Container = styled.SafeAreaView`
	flex-direction: column;
	gap: 4px;
	width: 100%;
`;

const Title = styled.Text`
	font-family: ${theme.fonts.bold};
	font-size: ${theme.sizes.xl}px;
	color: ${theme.colors.black};
`;

const Description = styled.Text`
	font-family: ${theme.fonts.regular};
	font-size: ${theme.sizes.md}px;
	color: ${theme.colors.black};
`;

export { Container, Title, Description };