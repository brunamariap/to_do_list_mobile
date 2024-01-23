import { useState } from "react";
import Heading from "../../components/Heading";
import Input from "../../components/Input";
import TextAreaInput from "../../components/TextAreaInput";
import Button from "../../components/Button";

import {
	Container,
	InputsContainer,
	MainContainer,
	ButtonsContainer,
	TextButton
} from "./styles"

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { TaskData } from "../../interfaces/Task";
import { useTask } from "../../contexts/TaskContext";

interface CreateTaskData {
	title: string;
	description?: string;
}

const AddTask = () => {

	const navigation = useNavigation();

	const [isLoading, setIsLoading] = useState(false);

	const { addTask } = useTask();

	const schema = yup.object().shape({
		title: yup
			.string()
			.min(3, "Insira pelo menos 3 caracteres")
			.max(20, "Campo aceita apenas 20 caracteres")
			.required("Campo obrigatório"),
		description: yup.string()
	});

	const {
		control,
		reset,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmitTask = (data: CreateTaskData) => {
		console.log("dados", data)
		const newTask: TaskData = {
			id: 8,
			title: data.title,
			description: data.description,
			status: "pending",
			createdAt: new Date(),
			isChecked: false,
		}
		addTask(newTask);
		navigation.goBack();
		reset({})
	};

	return (
		<Container>
			<MainContainer>
				<Heading
					title="Adicionar Tarefa"
					description="Preencha as informações abaixo parar criar uma nova tarefa"
				/>
				<InputsContainer>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value, ref } }) => (
							<Input
								inputRef={ref}
								onChangeText={onChange}
								onBlur={onBlur}
								value={value}
								maxLength={20}
								error={errors.title?.message}
								label="Nome"
								placeholder="Digite o nome da tarefa"
							/>
						)}
						name="title"
					/>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value, ref } }) => (
							<TextAreaInput
								inputRef={ref}
								onChangeText={onChange}
								onBlur={onBlur}
								value={value}
								label="Descrição"
								placeholder="Insira uma descrição"
							/>
						)}
						name="description"
					/>
				</InputsContainer>

				<ButtonsContainer>
					<Button
						type="primary"
						onPress={handleSubmit(onSubmitTask)}
					>
						<TextButton type="primary" >Salvar</TextButton>
					</Button>
					<Button type="cancel" onPress={() => {
						navigation.goBack()
						reset({})
					}}>
						<TextButton type="cancel">Cancelar</TextButton>
					</Button>
				</ButtonsContainer>
			</MainContainer>
		</Container>
	)
}

export default AddTask;