import { useState } from "react";
import { Container, LabelText, TextInputContainer } from "./styles";
import { ErrorText } from "../../styles/global";

export interface InputProps {
	label: string;
	maxLength?: number;
	placeholder: string;
	isFocusedInput?: boolean;
	error?: any;
};

const Input = ({
	label,
	maxLength,
	placeholder,
	isFocusedInput,
	error,
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
				error={error}
				{...props}
			/>
			{error && <ErrorText>{error}</ErrorText>}
		</Container>
	);
};

export default Input;