import theme from "../../styles/themes";
import styled from "styled-components/native";

interface StyledButtonProps {
	type?: "primary" | "cancel";
	width?: string;
	height?: string;
};

const Container = styled.TouchableOpacity<StyledButtonProps>`
	background-color: ${(props) => (
		props.type === "primary"
			? theme.colors.primary
			: theme.colors.white
	)};
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	width: ${(props) => (
		props.width ? props.width : '90%'
	)};
	height: ${(props) => (
		props.height ? props.height : '48px'
	)};
	border: ${(props) => (
		props.type !== "primary"
			? `1.2px solid ${theme.colors.gray}`
			: `none`
	)};
`;

export { Container };