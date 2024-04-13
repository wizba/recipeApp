import React,{useCallback} from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch,useSelector } from "react-redux";
import RButton from "../Components/RButton/RButton";
import debounce from 'lodash/debounce';
import { fetchRecipies } from "../recipeslice";
import Recipes from "./Recipes/Recipes";

export function SearchFilter() {
  const { loading, error, recipies } = useSelector((state) => state.recipies);
  const dispatch = useDispatch();
  // Define a debounced version of the search function
  const debouncedSearch = useCallback(debounce((query) => {
    // call recipe ap by dispatching to redux
    // dispatch(searchRecipe(query));
    dispatch(fetchRecipies({searchTerm:query,from:"1",to:"25"}));
  }, 500), []); // Dependency array is empty, meaning the function is created only once


  return (
    <View style={styles.search}>
    <Ionicons name="search" size={32} color="#9b9b9b" />
        <TextInput style={styles.input}  onChangeText={debouncedSearch} placeholder="Search" />
    </View>
  );
}

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>
      <StatusBar style="auto" />
      {/* Sub header */}
      {/* <View>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>
            Hi, What are you cooking today
          </Text>
          <Image
            source={require("../../assets/Face_avatar.jpg")}
            style={styles.avatar}
          />
        </View>
      </View> */}
      
      <View style={styles.recipesContainer}>
        <Recipes/>
      </View>
      
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    height: "100%",
    width: "100%",
     paddingHorizontal: 20,
     overflow:'visible'
  },
  subHeader: {
    width: "100%",

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
  search: {
    width: "80%",
    paddingLeft: 5,
    paddingRight: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    height: "100%",
    backgroundColor: "#fff",
    overflow: "hidden",
    // elevation: 10
  },
  input: {
    width: "95%",
    padding: 1,
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: "#9b9898",
    width: "17%",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 4,
    height: "100%",
  },
  searchContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    height: 55,
    overflow: "hidden",
  },
  recipesContainer: {
    flex: 1,
    marginTop: 5,
    
  }
});
