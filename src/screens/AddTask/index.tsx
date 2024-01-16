// Ao criar uma task, o título dela deve conter, no máximo 20 caracteres

import Heading from "../../components/Heading";
import Input from "../../components/Input";
import TextAreaInput from "../../components/TextAreaInput";
import { Container, InputsContainer, MainContainer } from "./styled"

const AddTask = () => {
	return (
		<Container>
			<MainContainer>
				<Heading
					title="Adicionar Tarefa"
					description="Preencha as informações abaixo parar criar uma nova tarefa"
				/>
				<InputsContainer>
					<Input
						label="Nome"
						placeholder="Digite o nome da tarefa"
					/>
					<TextAreaInput
						label="Descrição"
						placeholder="Insira uma descrição"
					/>
				</InputsContainer>
			</MainContainer>
		</Container>
	)
}

export default AddTask;