import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { Props } from "../../navigation/mainNavigation";
import { Button, TextInput } from "react-native-paper";
import * as yup from "yup";

function ForgetPasswordScreen({ route, navigation }: Props) {
	return (
		<View style={styles.main_view}>
			<TextInput label="User Name" style={styles.text_input} />
			<TextInput label="Official Email" style={styles.text_input} />
			<Button
				mode="contained"
				style={styles.main_button}
				onPress={() => navigation.navigate("LoginScreen")}>
				Submit
			</Button>
		</View>
	);
}
export default ForgetPasswordScreen;

const styles = StyleSheet.create({
	main_view: {
		flex: 1,
		alignItems: Platform.OS === "web" ? "center" : "stretch",
		justifyContent: "flex-start",
		margin: "2%",
	},
	text_input: {
		marginTop: Platform.OS === "web" ? "3%" : "4%",
	},
	main_button: {
		marginTop: Platform.OS === "web" ? "2%" : "4%",
	},
});
