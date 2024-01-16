// Ao criar uma task, o título dela deve conter, no máximo 20 caracteres

import Heading from "../../components/Heading";
import Input from "../../components/Input";
import { Container, MainContainer } from "./styled"

const AddTask = () => {
	return (
		<Container>
			<MainContainer>

				<Heading
					title="Adicionar Tarefa"
					description="Preencha as informações abaixo parar criar uma nova tarefa"
				/>
				
				<Input
					label="Nome"
					placeholder="Digite o nome da tarefa"
				/>
			</MainContainer>
		</Container>
	)
}

export default AddTask;