// External Dependencies
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Internal Dependencies
import { Country } from "../gql/getCountries";

// Local Dependencies
import type { RootState } from "./store";

const initialState: { countries: Country[] } = {
  countries: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Country>) => {
      console.log(`REDUX: ${action.payload.name} is added to Favorites.`);
      state.countries?.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      console.log(`REDUX: ${action.payload} has been removed from Favorites.`);
      const oldState = [...state.countries];
      const newState = oldState.filter(
        (country) => country.name !== action.payload
      );
      state.countries = newState;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;

export const selectUser = (state: RootState) => state.favorites;

export default favoriteSlice.reducer;
