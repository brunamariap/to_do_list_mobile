import { useState } from "react";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import TextAreaInput from "../../components/TextAreaInput";
import {
	Container,
	InputsContainer,
	MainContainer,
	ButtonsContainer,
	TextButton
} from "./styles"
import Button from "../../components/Button";

const AddTask = () => {

	const [isLoading, setIsLoading] = useState(false);

	return (
		<Container>
			<MainContainer>
				<Heading
					title="Adicionar Tarefa"
					description="Preencha as informações abaixo parar criar uma nova tarefa"
				/>
				<InputsContainer>
					<Input
						maxLength={20}
						label="Nome"
						placeholder="Digite o nome da tarefa"
					/>
					<TextAreaInput
						label="Descrição"
						placeholder="Insira uma descrição"
					/>
				</InputsContainer>

				<ButtonsContainer>
					<Button type="primary">
						<TextButton type="primary">Confirmar</TextButton>
					</Button>
					<Button type="cancel">
						<TextButton type="cancel">Cancelar</TextButton>
					</Button>
				</ButtonsContainer>
			</MainContainer>
		</Container>
	)
}

export default AddTask;