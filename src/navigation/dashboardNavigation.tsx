import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "../screens/dashboardScreen/dashboardScreen";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";
import { Platform, TouchableOpacity } from "react-native";
import { Props as oneProps } from "../navigation/mainNavigation";
import IconBell from "../components/iconBell";
import ServicesScreen from "../screens/servicesScreen/servicesScreen";
import StudentProfileScreen from "../screens/studentProfileScreen/studentProfileScreen";

type DrawerStackList = {
	DashboardScreen: undefined;
	ServicesScreen: undefined;
	StudentProfileScreen: undefined;
};
export type Props = DrawerScreenProps<DrawerStackList, "DashboardScreen">;
const Drawer = createDrawerNavigator<DrawerStackList>();

function DashboardNavigation({ navigation, route }: oneProps) {
	return (
		<Drawer.Navigator>
			<Drawer.Screen
				name="DashboardScreen"
				component={DashboardScreen}
				options={{
					title: "Dashboard",
					headerRight: () => <IconBell navigation={navigation} route={route} />,
				}}
			/>
			<Drawer.Screen
				name="ServicesScreen"
				component={ServicesScreen}
				options={{
					title: "Services",
					headerRight: () => <IconBell navigation={navigation} route={route} />,
				}}
			/>
			<Drawer.Screen
				name="StudentProfileScreen"
				component={StudentProfileScreen}
				options={{
					title: "Student Profile",
				}}
			/>
		</Drawer.Navigator>
	);
}
export default DashboardNavigation;
