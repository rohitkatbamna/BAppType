import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

function AlertsNoticesScreen() {
	return (
		<View>
			<View style={styles.text_outter}>
				<Text style={styles.Text_alert}>Fee Remainder (only for students)</Text>
			</View>
		</View>
	);
}

export default AlertsNoticesScreen;
const styles = StyleSheet.create({
	Text_alert: {
		fontWeight: "bold",
		fontSize: 20,
		padding: Platform.OS === "web" ? "1%" : "3%",
		backgroundColor: "#841584",
		color: "white",
		borderRadius: 10,
		marginLeft: "auto",
		marginRight: "auto",
	},
	text_outter: {
		padding: "2%",
	},
});
