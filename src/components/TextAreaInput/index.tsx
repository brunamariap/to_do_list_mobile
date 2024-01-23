import { useState } from "react";
import { Container, LabelText, TextInputContainer } from "./styles";
import { ErrorText } from "../../styles/global";

export interface TextAreaProps {
	label: string;
	placeholder: string;
	isFocusedInput?: boolean;
	error?: any;
};

const TextAreaInput = ({
	label,
	placeholder,
	isFocusedInput,
	error,
	...props
}: TextAreaProps) => {
	const [isFocused, setIsFocused] = useState(false);

	const toogleFocusInput = () =>
		setIsFocused((focused) => !focused)

	return (
		<Container>
			<LabelText>{label}</LabelText>
			<TextInputContainer
				placeholder={placeholder}
				onFocus={toogleFocusInput}
				onBlur={toogleFocusInput}
				isFocusedInput={isFocused}
				multiline
				numberOfLines={3}
				{...props}
			/>
			{error && <ErrorText>{error}</ErrorText>}
		</Container>
	);
};

export default TextAreaInput;