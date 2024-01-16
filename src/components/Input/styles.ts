import styled from "styled-components/native";
import theme from '../../styles/themes';
import { InputProps } from ".";
import { TextInputProps } from "react-native";

interface StyledTextInputProps extends TextInputProps{
	isFocusedInput: boolean;
};

const Container = styled.SafeAreaView`
	width: 100%;
`;

const LabelText = styled.Text`
	font-family: ${theme.fonts.semibold};
	font-size: ${theme.sizes.md}px;
	color: ${theme.colors.black};
`;

const TextInputContainer = styled.TextInput<StyledTextInputProps>`
	width: 100%;
	background-color: ${theme.colors.white};
	flex-direction: row;
	border: ${(props) => (
		props.isFocusedInput
			? `1.5px solid ${theme.colors.dark}`
			: `1.5px solid ${theme.colors.gray}`
	)};
	align-items: center;
	justify-content: space-between;
	border-radius: 8px;
	padding: 24px 12px;
`;

export { Container, LabelText, TextInputContainer };

