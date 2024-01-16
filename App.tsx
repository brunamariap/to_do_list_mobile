import { StatusBar } from 'expo-status-bar';
import {
	useFonts,
	Inter_300Light,
	Inter_400Regular,
	Inter_600SemiBold,
	Inter_700Bold
} from '@expo-google-fonts/inter';
import Pending from './src/screens/Pending';
import theme from './src/styles/themes';
import AddTask from './src/screens/AddTask';

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
		<>
			{/* <StatusBar style='auto' /> */}
			<AddTask />
		</>
	);
}