import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Platform,
} from "react-native";
import { Props } from "../../navigation/mainNavigation";

function ServicesScreen({ navigation, route }: Props) {
	return (
		<View style={styles.main_services}>
			<TouchableOpacity style={styles.button_main}>
				<Text style={styles.button_text}>Apply Leave</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button_main}
				onPress={() => {
					navigation.navigate("PayFeeScreen");
				}}>
				<Text style={styles.button_text}>Pay Fee</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button_main}
				onPress={() => {
					navigation.navigate("CourseRegistrationScreen");
				}}>
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
export default ServicesScreen;

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
		width: Platform.OS === "web" ? "auto" : "30%",
		margin: Platform.OS === "web" ? "0.5%" : "2%",
		height: Platform.OS === "web" ? "50px" : "20%",
		borderRadius: 10,
		alignContent: "center",
		justifyContent: "center",
		padding: Platform.OS === "web" ? "1%" : "auto",
	},
});
