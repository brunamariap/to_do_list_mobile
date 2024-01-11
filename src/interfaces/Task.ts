export interface Task {
	title: string;
	description?: string;
	status: "pending" | "finished";
	createdAt: Date;
}
