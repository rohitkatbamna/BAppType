import React from "react";
import { View, Text, StyleSheet, Platform, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";

function SelectRoleScreen() {
	return (
		<View style={styles.main_view}>
			<Text style={styles.select_role_text}>Select Role</Text>
			<Button mode="contained" style={styles.faculty_admin_button}>
				Faculty
			</Button>
			<Button mode="contained" style={styles.faculty_admin_button}>
				Admin
			</Button>
		</View>
	);
}
export default SelectRoleScreen;

const styles = StyleSheet.create({
	main_view: {
		flex: 1,
		alignItems: "center",
		justifyContent: Platform.OS === "web" ? "flex-start" : "center",
	},
	select_role_text: {
		fontWeight: "bold",
		fontSize: 25,
		textAlign: "center",
		marginTop: Platform.OS === "web" ? "4%" : 0,
	},
	faculty_admin_button: {
		marginHorizontal: Platform.OS === "web" ? "30%" : "20%",
		marginTop: "3%",
		width: Platform.OS === "web" ? "10%" : "40%",
	},
});
