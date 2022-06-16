import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/loginScreen/loginScreen";
import SelectRoleScreen from "../screens/selectRoleScreen/selectRoleScreen";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import ForgetPasswordScreen from "../screens/forgetPassword/forgetPassword";
import DashboardNavigation from "./dashboardNavigation";
import AlertsNotices from "../screens/alertsNotices/alertsNotices";
import PayFee from "../screens/payFee/payFee";

type StackParamList = {
	LoginScreen: undefined;
	SelectRoleScreen: undefined;
	ForgetPasswordScreen: undefined;
	DashboardNavigation: undefined;
	AlertsNotices: undefined;
	PayFees: undefined;
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
						title: "Select Role",
					}}
				/>
				<Stack.Screen
					name="ForgetPasswordScreen"
					component={ForgetPasswordScreen}
					options={{
						title: "Forgot Password",
					}}
				/>
				<Stack.Screen
					name="DashboardNavigation"
					component={DashboardNavigation}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="AlertsNotices"
					component={AlertsNotices}
					options={{
						title: "Alerts & Notices",
					}}
				/>
				<Stack.Screen
					name="PayFees"
					component={PayFee}
					options={{
						title: "Pay Fees",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default MainNavigation;
