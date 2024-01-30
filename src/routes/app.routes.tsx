import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import theme from "../styles/themes";

import Pending from "../screens/Pending";
import Finished from "../screens/Finished";
import AddTask from "../screens/AddTask";

import { TabLabel } from "../styles/global";
import { Feather } from '@expo/vector-icons';
import { CheckCircle, PlusCircle, Clock } from "react-native-feather"
import TaskDetails from "../screens/Details";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const AppRoutes = () => {

	const TabNavigation = () => {
		return (
			<Tab.Navigator
				screenOptions={{
					headerShown: false,
					tabBarStyle: {
						backgroundColor: theme.colors.white,
						borderWidth: 0,
						height: 70,
						borderTopWidth: 0,
					},
					tabBarShowLabel: true,
					tabBarActiveTintColor: theme.colors.primary,
					tabBarInactiveTintColor: theme.colors.gray,
				}}
			>
				<Tab.Screen
					name="PendingTasks"
					component={Pending}
					options={{
						tabBarIcon: ({ color }) =>
							<Clock width={28} height={28} color={color} />,
						tabBarLabel: ({ focused }) => (
							<View>
								<TabLabel focused={focused}>Pendentes</TabLabel>
								{focused &&
									<View style={styles.tabLabelBorder} />
								}
							</View>
						),
					}}
				/>
				<Tab.Screen
					name="FinishedTasks"
					component={Finished}
					options={{
						tabBarIcon: ({ color }) =>
							<CheckCircle width={28} height={28} color={color} />,
						tabBarLabel: ({ focused }) => (
							<View>
								<TabLabel focused={focused}>Finalizadas</TabLabel>
								{focused &&
									<View style={styles.tabLabelBorder} />
								}
							</View>
						),
					}}
				/>
				<Tab.Screen
					name="AddTask"
					component={AddTask}
					options={{
						tabBarIcon: ({ color }) =>
							<PlusCircle width={28} height={28} color={color} />,
						tabBarLabel: ({ focused }) => (
							<View>
								<TabLabel focused={focused}>Adicionar tarefa</TabLabel>
								{focused &&
									<View style={styles.tabLabelBorder} />
								}
							</View>
						),
					}}
				/>
			</Tab.Navigator>
		)
	}

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen
				name="TabNavigation"
				component={TabNavigation}
			/>
			<Stack.Screen
				name="TaskDetails"
				component={TaskDetails}
			/>
		</Stack.Navigator>
	)
}

const styles = StyleSheet.create({
	tabLabelBorder: {
		borderBottomColor: theme.colors.primary,
		borderBottomWidth: 2,
		width: "auto"
	}
})

export default AppRoutes;