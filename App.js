import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./store/Screens/Welcome/WelcomeScreen";
import HomeScreen, { SearchFilter } from "./store/Screens/HomeScreen";
import RButton from "./store/Components/RButton/RButton";

const Stack = createStackNavigator();
const HomeHeader = () =>{
  return(
    <View style={styles.searchContainer}>
        {/*  icons and field */}
        <SearchFilter />
        <RButton
          externalStyles={{ container: styles.buttonContainer }}
          onPress={() => {}}
        >
          <Ionicons name="options" size={32} color="#F2F2F2" />
        </RButton>
      </View>
  )
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="welcome"
            component={WelcomeScreen}
          />
          <Stack.Screen 
            name="Home" 
            options={{
              headerTitle:(pops) =><HomeHeader/>,
              headerStyle:styles.headerStyle,
              headerTintColor: '#F2F2F2',
            }}
            component={HomeScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#c0c0c0",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // height: "100%",
    overflow: "hidden",
    borderStyle: "solid"
  },
  buttonContainer: {
    // backgroundColor: "#9b9898",
    width: "17%",
    borderRadius: 10,
    overflow: "hidden",
    // elevation: 4,
    height: "100%",
  },
  headerStyle: {
    //  backgroundColor: '#747474',
     backgroundColor: '#0e0d0d',
    //  #e93e3e
    height: 120,
  }
});
