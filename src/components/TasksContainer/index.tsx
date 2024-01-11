import React from "react";
import { Container } from "./styles";

interface TasksContainerProps {
	children: React.ReactNode;
};

const TasksContainer = ({ children }: TasksContainerProps) => {
	return (
		<Container>
			{children}
		</Container>
	)
}

export default TasksContainer;