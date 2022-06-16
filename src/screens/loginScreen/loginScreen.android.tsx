import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Props } from "../../navigation/mainNavigation";

function LoginScreen({ route, navigation }: Props) {
	return (
		<KeyboardAwareScrollView>
			<View style={styles.container}>
				<Image
					source={require("../../assets/logo.png")}
					style={styles.tinyLogo}
				/>
				<Text style={styles.main_text}>Log In</Text>
				<TextInput label="Email" style={styles.main_input} />
				<TextInput label="Password" style={styles.main_input} />
				<Button
					mode="contained"
					style={styles.main_button}
					onPress={() => navigation.navigate("SelectRoleScreen")}>
					Sign In
				</Button>
				<Pressable onPress={() => navigation.navigate("ForgetPasswordScreen")}>
					<Text style={styles.forget_password_text}>Forget Password ?</Text>
				</Pressable>
			</View>
		</KeyboardAwareScrollView>
	);
}
export default LoginScreen;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		alignContent: "center",
		marginTop: "5%",
	},
	tinyLogo: {
		marginTop: "5%",
		height: "70%",
		width: "100%",
	},
	main_text: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 25,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: "2%",
	},
	main_input: {
		width: "90%",
		marginTop: "3%",
	},
	main_button: {
		marginTop: "4%",
	},
	forget_password_text: {
		marginTop: "3%",
	},
});
