import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
	children: React.ReactNode;
	loading?: boolean;
	width?: string;
	height?: string;
	type?: "primary" | "cancel";
}

const Button = ({
	children,
	loading = false,
	width,
	height,
	type,
	...props
}: ButtonProps) => {
	return (
		<Container
			disabled={loading}
			type={type}
			width={width}
			height={height}
			{...props}
		>
			{children}
		</Container>
	)
}

export default Button;