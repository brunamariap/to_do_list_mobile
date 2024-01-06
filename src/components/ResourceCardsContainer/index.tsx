import ResourceCard from "../ResourceCard"
import { Container } from "./styles";

const ResourceCardsContainer = () => {
	return (
		<Container>
			<ResourceCard title='Cadastradas' total={4}/>
			<ResourceCard title='Pendentes' total={4}/>
			<ResourceCard title='Concluídas' total={4}/>
		</Container>
	)
}

export default ResourceCardsContainer;