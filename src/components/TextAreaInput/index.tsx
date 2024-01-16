import { useState } from "react";
import { TextInputProps } from "react-native";
import { Container, TextInputContainer } from "./styles";

export interface InputProps extends TextInputProps {
	placeholder: string;
	isFocusedInput?: boolean;
};

const TextAreaInput = ({
	placeholder,
	isFocusedInput,
	...props
}: InputProps) => {
	const [isFocused, setIsFocused] = useState(false);

	const toogleFocusInput = () =>
		setIsFocused((focused) => !focused)

	return (
		<TextInputContainer
			placeholder={placeholder}
			isFocusedInput={isFocused}
			{...props}
		/>
	);
};

export default TextAreaInput;