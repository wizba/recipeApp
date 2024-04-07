import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Image, ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient
import RButton from "../../Components/RButton/RButton";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        style={styles.ImageBackground}
        source={require("../../../assets/Mushroom-Soup-in-bowl-SQ.webp")}
      >
        <LinearGradient
          // Define the gradient colors and locations
          colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0)"]}
          style={styles.overlay}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
        >
          <View style={styles.content}>
            <Text style={styles.text}>Cooking a Delicious Food Easily</Text>
            <Text style={styles.subText}>
              Discover more than 1200 recipes in your hands and cooking it
              easily
            </Text>
            <View style={styles.RbuttonContainer}>
              <RButton text={"Get Started"} onPress={() => navigation.navigate("Home")} />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ImageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
  },

  text: {
    fontSize: 32,
    color: "rgb(238, 238, 238)",
    fontWeight: "bold",
    width: 230,
  },
  subText: {
    fontSize: 16,
    // color: "#7a7a7a",
    color: "#bcbcbc",
    width: 230,
  },
  RbuttonContainer: {
    marginTop: 20,
  },
  content: {
   backgroundColor: "rgba(0,0,0,0.8)",
   padding: 30,
  }
});
