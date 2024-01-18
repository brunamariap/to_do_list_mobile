import { useState } from "react";
import { Container, LabelText, TextInputContainer } from "./styles";

export interface InputProps {
	label: string;
	maxLength?: number;
	placeholder: string;
	isFocusedInput?: boolean;
};

const Input = ({
	label,
	maxLength,
	placeholder,
	isFocusedInput,
	...props
}: InputProps) => {
	const [isFocused, setIsFocused] = useState(false);

	const toogleFocusInput = () =>
		setIsFocused((focused) => !focused)

	return (
		<Container>
			<LabelText>{label}</LabelText>
			<TextInputContainer
				maxLength={maxLength}
				placeholder={placeholder}
				onFocus={toogleFocusInput}
				onBlur={toogleFocusInput}
				isFocusedInput={isFocused}
				{...props}
			/>
		</Container>
	);
};

export default Input;