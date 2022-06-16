import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "../screens/dashboardScreen/dashboardScreen";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import { FontAwesome } from "@expo/vector-icons";
import { Platform, TouchableOpacity } from "react-native";
import { Props as oneProps } from "../navigation/mainNavigation";
import IconBell from "../components/iconBell";
import Services from "../screens/services/services";

type DrawerStackList = {
	DashboardScreen: undefined;
	Services: undefined;
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
				name="Services"
				component={Services}
				options={{
					title: "Services",
					headerRight: () => <IconBell navigation={navigation} route={route} />,
				}}
			/>
		</Drawer.Navigator>
	);
}
export default DashboardNavigation;
