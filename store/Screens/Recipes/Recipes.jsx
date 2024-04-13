import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Pressable,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

const numColumns = 2; // Number of columns you want
const spacing = 10; // Spacing between items
const screenWidth = Dimensions.get("window").width;
const totalSpacing = spacing * (numColumns - 1); // Total spacing between items in a row
const itemWidth = (screenWidth - totalSpacing) / numColumns;

const imageHeight = 200;
const RecipeItem = ({ item }) => {

  return (
    <View style={{ flex: 1, flexGrow: 1, flexDirection: "column" }}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.recipeItemImage}
      >
        <Pressable
          android_ripple={{ color: "#ccc" }}
          onPress={() =>{
            console.log("pressed")
          }}
          style={styles.pressableArea}
        >
          <View style={styles.recipeTextContainer}>
            <Text>{item.image  ? 'Hello': 'No image'}</Text>
          </View>
        </Pressable>
      </ImageBackground>
      <View style={styles.recipeItemContainer}>
        <Text style={styles.recipe} numberOfLines={1}>
          {item.label}
        </Text>
        <View style={styles.duration}>
        <Ionicons name="time-outline" size={20} color="#9c731b" />
            <Text style={styles.timerText} numberOfLines={1}>
              {item.totalTime+' min'} 
            </Text>
        </View>
      </View>
    </View>
  );
};

function Recipes() {
  const { loading, error, recipies } = useSelector((state) => state.recipies);

  return (
    <View style={styles.container}>
      <Text style={styles.recipesheader}>Your Recipes</Text>
      {recipies?.hits && (
        <FlatList
          data={[...recipies?.hits]}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <RecipeItem {...item} />}
          numColumns={2}
          columnWrapperStyle={{ gap: 20 }}
          contentContainerStyle={{
            gap: 35,
            paddingVertical: imageHeight - 150,
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

export default Recipes;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  recipesheader: {
    fontSize: 25,
    color: "#383838",
    fontWeight: "bold",
    marginTop: 20,
  },
  recipe: {
    fontSize: 16,
    color: "#383838",
    
  },
  timerText:{
    fontSize: 16,
    color: "#9c731b",
  },
  duration:{
    flexDirection:'row'
  },
  recipeTextContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#00000042",
  },
  recipeItemContainer: {
    padding: 10,
    height: 60,
  },
  recipeItemImage: {
    flex: 1,
    height: imageHeight,
    resizeMode: "cover",
    borderRadius: 10,
    overflow: "hidden",
    // elevation: 10,
  },
  pressableArea: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "row",
  },
});
