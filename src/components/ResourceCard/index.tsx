import { Container, ResourceCardText } from "./styles";

interface ResourceCardProps {
	title: string;
	total: number;
}

const ResourceCard = ({
	title,
	total }:
	ResourceCardProps
) => {
	return (
		<Container>
			<ResourceCardText>{title}</ResourceCardText>
			<ResourceCardText>{total}</ResourceCardText>
		</Container>
	)
};

export default ResourceCard;
