import styled from "styled-components/native";
import theme from '../../styles/themes';
import { InputProps } from ".";

interface StyledTextInputProps {
	isFocused: boolean;
};

const Container = styled.SafeAreaView<InputProps>`
	
`;

const TextInputContainer = styled.TextInput<InputProps>`
	width: 100%;
	background-color: ${theme.colors.white};
	flex-direction: row;
	border: ${(props) => (
		props.isFocusedInput
			? `1px solid ${theme.colors.dark}`
			: 'none'
	)};
	align-items: center;
	justify-content: space-between;
	border-radius: 8px;
	/* flex: 1; */
	padding: 24px 12px;
`;

export { Container, TextInputContainer };

