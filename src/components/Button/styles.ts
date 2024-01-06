import theme from "../../styles/themes";
import styled from "styled-components/native";

const DefaultButton = styled.SafeAreaView`
	flex: 1;
	background-color: ${theme.colors.primary};
`;

const ButtonText = styled.Text`
	color: ${theme.colors.white};
`;


export { DefaultButton };