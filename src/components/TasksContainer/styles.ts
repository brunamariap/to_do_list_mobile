import styled from "styled-components/native";
import theme from "../../styles/themes";

const Container = styled.SafeAreaView`
	background-color: ${theme.colors.white};
	justify-content: center;
	align-items: center;
	gap: 24px;
	padding: 24px 0 48px;
	border-top-right-radius: 32px;
	border-top-left-radius: 32px;
	margin-top: 16px;
	height: inherit;
`;

export { Container };