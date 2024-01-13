import styled from "styled-components/native";
import theme from "./themes";

const Heading = styled.Text`

`;

const Title = styled.Text`
	font-family: ${theme.fonts.semibold};
	font-size: ${theme.sizes.md}px;
	color: ${theme.colors.black};
	`;

const Description = styled.Text`
	font-family: ${theme.fonts.light};
	font-size: ${theme.sizes.xs}px;
	color: ${theme.colors.gray};
`;

const Info = styled.Text`
	font-family: ${theme.fonts.light};
	font-size: ${theme.sizes.xs}px;
	color: ${theme.colors.gray};
`;

export { Title, Description, Info };