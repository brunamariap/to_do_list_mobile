import { Text, View, StyleSheet } from "react-native";

interface StatisticsCardProps {
	title: string;
	total: number;
}

export default function StatisticsCard({ title, total }: StatisticsCardProps) {
	return (
		<View>
			<Text>{title}</Text>
			<Text>{total}</Text>
		</View>
	)
};

const styles = StyleSheet.create({
	contatiner: {
		flex: 1,
		gap: 8,
		borderRadius: 8,
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#FAFAFA"
	}
});