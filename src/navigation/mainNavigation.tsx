import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/loginScreen/loginScreen";
import SelectRoleScreen from "../screens/selectRoleScreen/selectRoleScreen";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import ForgetPasswordScreen from "../screens/forgetPasswordScreen/forgetPasswordScreen";
import DashboardNavigation from "./dashboardNavigation";
import AlertsNoticesScreen from "../screens/alertsNoticesScreen/alertsNoticesScreen";
import PayFeeScreen from "../screens/payFeeScreen/payFeeScreen";
import CourseRegistrationScreen from "../screens/courseRegistrationScreen/courseRegistrationScreen";

type StackParamList = {
	LoginScreen: undefined;
	SelectRoleScreen: undefined;
	ForgetPasswordScreen: undefined;
	DashboardNavigation: undefined;
	AlertsNoticesScreen: undefined;
	PayFeeScreen: undefined;
	CourseRegistrationScreen: undefined;
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
					name="AlertsNoticesScreen"
					component={AlertsNoticesScreen}
					options={{
						title: "Alerts & Notices",
					}}
				/>
				<Stack.Screen
					name="PayFeeScreen"
					component={PayFeeScreen}
					options={{
						title: "Pay Fees",
					}}
				/>
				<Stack.Screen
					name="CourseRegistrationScreen"
					component={CourseRegistrationScreen}
					options={{
						title: "Course Registration",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
export default MainNavigation;
