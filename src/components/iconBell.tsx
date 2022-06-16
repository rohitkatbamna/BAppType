import React from "react";
import { TouchableOpacity, Platform } from "react-native";
import { Props } from "../navigation/mainNavigation";
import { FontAwesome } from "@expo/vector-icons";

function IconBell({ navigation, route }: Props) {
	return (
		<>
			<TouchableOpacity
				style={{ marginRight: Platform.OS === "web" ? "10%" : "8%" }}
				onPress={() => navigation.navigate("AlertsNoticesScreen")}>
				<FontAwesome name="bell" size={24} color="black" />
			</TouchableOpacity>
		</>
	);
}
export default IconBell;
