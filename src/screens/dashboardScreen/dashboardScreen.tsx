import React from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	Platform,
	TouchableOpacity,
	Button,
} from "react-native";
import { Props } from "../../navigation/dashboardNavigation";

function DashboardScreen({ navigation, route }: Props) {
	return (
		<View>
			<View style={styles.imageSection}>
				{Platform.OS === "web" ? (
					<img
						src={require("../../assets/logo.png")}
						style={{
							height: "80%",
							width: "20%",
							marginRight: "auto",
							marginLeft: "auto",
						}}
					/>
				) : (
					<Image
						source={require("../../assets/logo.png")}
						style={{ height: "60%", width: "100%" }}
					/>
				)}
				<Text style={styles.bSchool_text}>IFIM B School</Text>
			</View>
			{Platform.OS === "web" ? (
				<div className="d-flex ms-auto me-auto">
					<Button
						title="Services"
						color="#841584"
						onPress={() => navigation.navigate("ServicesScreen")}
					/>
					<div className="ms-1">
						<Button title="My Classes" color="#841584" />
					</div>
				</div>
			) : (
				<View style={styles.pressable_section}>
					<TouchableOpacity
						style={styles.pressable_services}
						onPress={() => navigation.navigate("ServicesScreen")}>
						<Text style={styles.pressable_text}>Services</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.pressable_services}>
						<Text style={styles.pressable_text}>My Classes</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
}
export default DashboardScreen;

const styles = StyleSheet.create({
	imageSection: {
		margin: "2%",
	},
	bSchool_text: {
		fontWeight: "bold",
		fontSize: 20,
		textAlign: "center",
	},
	pressable_section: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	pressable_services: {
		backgroundColor: "#841584",
		borderRadius: 10,
		padding: "2%",
	},
	pressable_text: {
		color: "white",
		fontSize: 18,
	},
});
