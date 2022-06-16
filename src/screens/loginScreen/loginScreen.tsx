import React from "react";
import "../../styles/css/loginScreen.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Props } from "../../navigation/mainNavigation";
import { Image, Button, Pressable, Text } from "react-native";

function LoginScreen({ route, navigation }: Props) {
	return (
		<div className="loginScreen_main_div" style={{ margin: "0 auto 0 auto" }}>
			<Image
				source={require("../../assets/logo.png")}
				style={{ height: "40%", width: "100%" }}
			/>
			<p className="text-center fw-bold fs-4">Log In</p>
			<form>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<Button
					title="Sign In"
					onPress={() => navigation.navigate("SelectRoleScreen")}
				/>
			</form>
			<Pressable onPress={() => navigation.navigate("ForgetPasswordScreen")}>
				<Text>Forget Password ?</Text>
			</Pressable>
		</div>
	);
}

export default LoginScreen;
