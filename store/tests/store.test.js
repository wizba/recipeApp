import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';

import recipiesReducer, { fetchRecipies } from '../recipeslice';
import { fakeRecipeData } from './storeMockData';

describe('FETCH RECIPES', () => {
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

    it('eventually dispatches the FETCH_RECIPES action', async () => {
        mockAxios.onGet().replyOnce(200, fakeRecipeData);
        
        const searchTerm = 'chicken';
        const from = 0;
        const to = 10;

        await store?.dispatch(fetchRecipies({ searchTerm, from, to }));
        const state = store.getState().recipies;

        expect(state.loading).toBe(false);
        expect(state.recipies).toEqual(fakeRecipeData);
        expect(state.error).toBeNull();
    });

    it('should handle an error if fetching recipes fails', async () => {
        mockAxios.onGet(`https://api.edamam.com/search`).networkError();
    
        const searchTerm = 'chicken';
        const from = 0;
        const to = 10;
    
        await store.dispatch(fetchRecipies({ searchTerm, from, to }));
        const state = store.getState().recipies;
    
        expect(state.loading).toBe(false);
        expect(state.error).toBeDefined();
      });

});
   
