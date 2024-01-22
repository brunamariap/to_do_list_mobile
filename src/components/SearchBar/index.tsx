import { useState } from "react";
import { Container, SearchButton, TextInputContainer } from "./styles";
import { Fontisto } from '@expo/vector-icons';
import theme from "../../styles/themes";

interface SearchBarProps {
	placeholder: string;
}

const SearchBar = ({
	placeholder
}: SearchBarProps) => {
	const [isFocused, setIsFocused] = useState(false);

	const toogleFocusInput = () =>
		setIsFocused((focused) => !focused)

	return (
		<Container isFocused={isFocused}>
			<TextInputContainer
				placeholder={placeholder}
				onFocus={toogleFocusInput}
				onBlur={toogleFocusInput}
			// placeholderTextColor={theme.colors.gray}
			/>
			<SearchButton disabled={isFocused}>
				<Fontisto name="search" size={24} color={theme.colors.primary} />
			</SearchButton>
		</Container>
	)
}

export default SearchBar;