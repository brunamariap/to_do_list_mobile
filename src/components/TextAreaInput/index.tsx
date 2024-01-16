import { useState } from "react";
import { Container, LabelText, TextInputContainer } from "./styles";

export interface TextAreaProps {
	label: string;
	placeholder: string;
	isFocusedInput?: boolean;
};

const TextAreaInput = ({
	label,
	placeholder,
	isFocusedInput,
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
		</Container>
	);
};

export default TextAreaInput;