import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Platform,
} from "react-native";
import { Props } from "../../navigation/mainNavigation";

function Services({ navigation, route }: Props) {
	return (
		<View style={styles.main_services}>
			<TouchableOpacity style={styles.button_main}>
				<Text style={styles.button_text}>Apply Leave</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button_main}
				onPress={() => {
					navigation.navigate("PayFees");
				}}>
				<Text style={styles.button_text}>Pay Fee</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button_main}>
				<Text style={styles.button_text}>Course Registration</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button_main}>
				<Text style={styles.button_text}>Virtual Classroom</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button_main}>
				<Text style={styles.button_text}>Learning Hub</Text>
			</TouchableOpacity>
		</View>
	);
}
export default Services;
const styles = StyleSheet.create({
	main_services: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: "2%",
		flexWrap: "wrap",
		alignItems: "center",
	},
	button_text: {
		fontSize: 20,
		color: "white",
		textAlign: "center",
	},
	button_main: {
		backgroundColor: "#841584",
		width: Platform.OS === "web" ? "10%" : "40%",
		margin: "2%",
		height: "50%",
		borderRadius: 10,
	},
});
