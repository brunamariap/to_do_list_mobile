import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
	text: string;
	loading: boolean;
	type?: undefined | "cancel";
}

const Button = ({
	text,
	loading = false,
	type,
	...props
}: ButtonProps) => {
	return (
		<TouchableOpacity disabled={loading} {...props}>
			<Text>{text}</Text>
		</TouchableOpacity>
	)
}

export default Button;