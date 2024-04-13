import React, { useEffect } from "react";
import { Pressable, StyleSheet, View } from "react-native";

function RButton({ externalStyles , onPress,children}) {
 
  return (
    <View style={[externalStyles?.container]}>
      <Pressable
        style={[externalStyles?.button, styles.button]}
        onPress={onPress}
        android_ripple={{ color: '#dddddd' }}
        testID="RButton"
      >
        {children}
      </Pressable>
    </View>
  );
}

export default RButton;

const styles = StyleSheet.create({
  
  button: {
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
 
});
