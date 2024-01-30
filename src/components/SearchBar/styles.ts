import styled from "styled-components/native";
import theme from "../../styles/themes";

interface StyledTextInputProps {
	isFocused: boolean;
};

const Container = styled.SafeAreaView<StyledTextInputProps>`
	width: 90%;
	background-color: ${theme.colors.white};
	flex-direction: row;
	border: ${(props) => (
		props.isFocused
			? `1px solid ${theme.colors.dark}`
			: 'none'
	)};
	align-items: center;
	justify-content: space-between;
	border-radius: 8px;
	align-self: center;
`;

const SearchButton = styled.TouchableOpacity`
	padding: 10px 0;
	margin-right: 16px;
	/* background-color: red; */
`;

const TextInputContainer = styled.TextInput`
	background-color: ${theme.colors.white};
	flex: 1;
	padding: 20px 12px;
	border-radius: 8px;
`;

export { Container, SearchButton, TextInputContainer };