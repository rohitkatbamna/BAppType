import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/loginScreen/loginScreen";
import SelectRoleScreen from "../screens/selectRoleScreen/selectRoleScreen";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type StackParamList = {
	LoginScreen: undefined;
	SelectRoleScreen: undefined;
};
export type Props = NativeStackScreenProps<StackParamList, "LoginScreen">;

const Stack = createNativeStackNavigator<StackParamList>();

function MainNavigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="LoginScreen">
				<Stack.Screen
					name="LoginScreen"
					component={LoginScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="SelectRoleScreen"
					component={SelectRoleScreen}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default MainNavigation;
