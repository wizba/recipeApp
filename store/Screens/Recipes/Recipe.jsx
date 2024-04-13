import React from'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from'react-native';

function Recipe(){
    return (
        <View style={styles.recipe}>
            <Text style={styles.recipeName}>
                {this.props.recipe.label}
            </Text>
            <Text style={styles.recipeTime}>
                {this.props.recipe.totalTime} min
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    recipe:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#F2F2F2",
        borderRadius: 10,
    },
    recipeName:{
        fontSize: 20,
        fontWeight: "bold",
    },
    recipeTime:{
        fontSize: 15,
        color: "#9c731b",
    }
})