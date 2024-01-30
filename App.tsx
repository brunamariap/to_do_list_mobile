import { StatusBar } from 'expo-status-bar';
import {
	useFonts,
	Inter_300Light,
	Inter_400Regular,
	Inter_600SemiBold,
	Inter_700Bold
} from '@expo-google-fonts/inter';
import Routes from './src/routes';
import { SafeAreaProvider } from "react-native-safe-area-context"
import { TaskProvider } from './src/contexts/TaskContext';

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
		<SafeAreaProvider>
			<TaskProvider>
				<StatusBar style='auto'/>
				<Routes />
			</TaskProvider>
		</SafeAreaProvider>
	);
}