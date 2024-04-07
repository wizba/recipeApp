import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* Sub header */}
      <View>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>
            Hi, What are you cooking today
          </Text>
          <Image
            source={require("../../assets/Face_avatar.jpg")}
            style={styles.avatar}
          />
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>
            Hi, What are you cooking today
          </Text>
          <Image
            source={require("../../assets/Face_avatar.jpg")}
            style={styles.avatar}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e6e6e6",
    height: "100%",
    width: "100%",
  },
  subHeader: {
    width: "100%",
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subHeaderText: {
    fontSize: 25,
    color: "#1d1d1d",
    fontWeight: "bold",
    width: 200,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
