import styled from "styled-components/native";
import theme from "./themes";

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

export { Title, Description, Info, ContainerCenter };