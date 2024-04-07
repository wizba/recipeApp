import React,{useEffect} from "react";
import { Text } from "react-native";
import { useDispatch,useSelector } from "react-redux";
import { fetchRecipies } from "./store/recipeslice";

function TestStore() {
    const { loading, error, recipies } = useSelector((state) => state.recipies);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("TestStore");
        dispatch(fetchRecipies({searchTerm:"chicken",from:"1",to:"2"}));
    }, []);

    useEffect(() => {
        // console.log("TestStore",recipies.hits)
    }, [recipies]);
  return <Text>TestStore</Text>;
}

export default TestStore;
