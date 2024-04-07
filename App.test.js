import React from "react";
import { render } from "@testing-library/react-native";
import App from "./App"; // Adjust the import path according to your project structure
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import { fakeRecipeData } from "./store/tests/storeMockData";
import * as RX from "react-redux";
import recipiesReducer from "./store/recipeslice";
import { NavigationContainer } from "@react-navigation/native";

describe("App", () => {
  let mockAxios;
  let store;

  /**
   * runs before each test
   * good for adding repeated setup code
   */
  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    store = configureStore({
      reducer: {
        recipies: recipiesReducer,
      },
    });
  });

  /**
   * runs after each test
   */
  afterEach(() => {
    mockAxios.restore();
    store = null;
  });

  it("renders the correct message", () => {
    mockAxios.onGet().replyOnce(200, fakeRecipeData);
    const { getByText } = render(
      <RX.Provider store={store}>
          <App />
      </RX.Provider>
    );
    expect(
      getByText("Open up App.js to start working on your app!")
    ).toBeTruthy();
  });
});
