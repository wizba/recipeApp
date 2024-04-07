import { createSlice, nanoid,createAsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    recipies: {},
    loading: false,
    error: null,
};

export const fetchRecipies = createAsyncThunk(
    "recipies/fetchRecipies",
    async ({searchTerm,from,to}, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://api.edamam.com/search?q=${searchTerm}&app_id=${process.env.APP_ID}&app_key=${process.env.API_KEY}&from=${from}&to=${to}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data); 
            
        }
    }
);

export const recipiesSlice = createSlice({
    name: "recipies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecipies.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.recipies = action.payload;
            })
            .addCase(fetchRecipies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch recipes";
            });
    },
});


export default recipiesSlice.reducer;
