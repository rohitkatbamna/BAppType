import React from "react";
import { StyleSheet, Text, View, Button, Platform } from "react-native";

function PayFeeScreen() {
	return (
		<View style={styles.main_view}>
			<Text style={styles.main_text}>Student fee Details</Text>
			<View style={styles.one_line}>
				<Text style={styles.text_offees}>
					{" "}
					Total Due(Regular +{"\n"}Credit Based + Extra) Amount
				</Text>
				<Text style={styles.text_offees}>:0</Text>
			</View>
			<View style={styles.one_line}>
				<Text style={styles.text_offees}> Fine amount</Text>
				<Text style={styles.text_offees}>:0</Text>
			</View>
			<View style={styles.one_line}>
				<Text style={styles.text_offees}> Total Paying Amount</Text>
				<Text style={styles.text_offees}>:0</Text>
			</View>
		</View>
	);
}
export default PayFeeScreen;
const styles = StyleSheet.create({
	main_view: {
		margin: Platform.OS === "web" ? "1%" : "4%",
	},
	main_text: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,
		marginTop: Platform.OS === "web" ? "2%" : "12%",
	},
	one_line: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: "2%",
	},
	text_offees: {
		fontSize: 18,
	},
});
