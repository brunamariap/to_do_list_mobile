import { Container, Description, Title } from "./styles";

interface HeadingProps {
	title: string;
	description: string;
};

const Heading = ({
	title,
	description,
}: HeadingProps) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Description>{description}</Description>
		</Container>
	)
};

export default Heading;