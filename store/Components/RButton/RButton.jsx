import React, { useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function RButton({ externalStyles, text, onPress }) {
  return (
    <View style={[externalStyles?.container, styles.container]}>
      <Pressable
        style={[externalStyles?.button, styles.button]}
        onPress={onPress}
        android_ripple={{ color: '#dddddd' }}
        testID="RButton"
      >
        <Text style={[externalStyles?.text, styles.text]}>{text}</Text>
        <Text style={[externalStyles?.text, styles.text]}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default RButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9b9898",
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
     elevation: 4,
  },
  button: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    color: "#1d1d1d",
  },
});
