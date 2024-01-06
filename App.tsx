import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import theme from './src/styles/themes';
import {
	useFonts,
	Inter_300Light,
	Inter_400Regular,
	Inter_600SemiBold,
	Inter_700Bold
} from '@expo-google-fonts/inter';

export default function App() {

	let [fontsLoaded] = useFonts({
		Inter_300Light,
		Inter_400Regular,
		Inter_600SemiBold, 
		Inter_700Bold,
	});

	if (!fontsLoaded) {
		return null
	}

	return (
		<View style={styles.container}>
			<Text>Open up App.tsx to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.colors.primaryTransparentMin,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
