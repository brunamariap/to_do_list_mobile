import styled from "styled-components/native";
import theme from "../../styles/themes";

const OverlayContainer = styled.SafeAreaView`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${theme.colors.blackBackgroundTransparent};
`;

export { OverlayContainer };