import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function PayFee() {
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
const styles = StyleSheet.create({
	main_view: {
		margin: "4%",
	},
	main_text: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,
		marginTop: "12%",
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
export default PayFee;
