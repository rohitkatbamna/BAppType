import React from "react";
import {
	View,
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	Platform,
	TouchableWithoutFeedback,
	Button,
	Keyboard,
	Image,
	Pressable,
} from "react-native";
import { Props } from "../../navigation/mainNavigation";
import { TextInput } from "react-native-paper";

const LoginScreen = ({ navigation, route }: Props) => {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.inner}>
					<Image
						source={require("../../assets/logo.png")}
						style={{
							height: "30%",
							width: "100%",
						}}
					/>
					<Text style={styles.header}>Log In</Text>
					<TextInput placeholder="Username" style={styles.textInput} />
					<TextInput placeholder="Password" style={styles.textInput} />
					<Pressable
						style={{
							backgroundColor: "blue",
							width: "30%",
							height: 30,
							borderRadius: 10,
							justifyContent: "center",
							marginLeft: "auto",
							marginRight: "auto",
						}}
						onPress={() => navigation.navigate("SelectRoleScreen")}>
						<Text style={styles.sign_in_text}>Sign In</Text>
					</Pressable>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};
export default LoginScreen;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		marginTop: "2%",
	},
	inner: {
		flex: 1,
		justifyContent: "space-around",
		margin: "3%",
	},
	header: {
		fontSize: 24,
		fontWeight: "bold",
		textAlign: "center",
	},
	textInput: {
		height: 40,
	},
	sign_in_text: {
		textAlign: "center",
		color: "white",
	},
});
