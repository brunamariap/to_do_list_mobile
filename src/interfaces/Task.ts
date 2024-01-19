export interface Task {
	id: string | number;
	title: string;
	description?: string;
	status: "pending" | "finished";
	createdAt: Date;
	isChecked: boolean;
}
