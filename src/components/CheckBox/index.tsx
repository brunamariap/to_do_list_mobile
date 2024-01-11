import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FaCheck } from "react-icons/fa6"
import theme from "../../styles/themes";
import { useState } from "react";

interface CheckBoxProps {
	taskId?: string | number;
	onChange?: () => void;
};

const CheckBox = ({
	taskId,
	onChange
}: CheckBoxProps) => {

	const [selected, setSelected] = useState();

	const toggle = () => {
		let p;
		p = 10;
		return p
	}

	return (
		<View>
			<TouchableOpacity style={styles.touchable} onPress={() => {}}>
				<FaCheck name="check" color={theme.colors.white} size={16} />
			</TouchableOpacity>
		</View>
	)
};

const styles = StyleSheet.create({
	touchable: {
		height: 22,
		width: 22,
		borderRadius: 4,
		justifyContent: "center",
		alignItems: "center"
	}
})

export default CheckBox;