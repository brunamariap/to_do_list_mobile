import { Title } from "../../styles/global";
import { Container } from "./styles";

interface ResourceCardProps {
	title: string;
	total: number;
}

const ResourceCard = ({
	title,
	total 
}: ResourceCardProps) => {
	return (
		<Container>
			<Title>{title}</Title>
			<Title>{total}</Title>
		</Container>
	)
};

export default ResourceCard;
