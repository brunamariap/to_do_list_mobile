export interface Task {
	id: string | number;
	title: string; // Deve ter um limite de 20 caracteres
	description?: string;
	status: "pending" | "finished";
	createdAt: Date;
}
