import { configureStore } from "@reduxjs/toolkit";
import favoriteDogReducer from "../features/favoriteDogSlice";

export const store = configureStore({
  reducer: {
    favoriteDog: favoriteDogReducer,
  },
});
