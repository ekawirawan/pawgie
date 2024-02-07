import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getDogs = createAsyncThunk(
  "dog/getDogs",
  async ({ name, dogs }) => {
    const API_KEY = import.meta.env.VITE_APP_API_KEY;

    const options = {
      method: "GET",
      url: `https://api.api-ninjas.com/v1/dogs?name=${name}`,
      headers: {
        "X-Api-Key": API_KEY,
      },
    };

    const response = await axios.request(options);

    const modifiedDogs = response.data.map((dog) => ({
      ...dog,
      isFavorite: dogs.some((dogFav) => dogFav.name === dog.name),
    }));

    return modifiedDogs;
  }
);

const dogEntity = createEntityAdapter({
  selectId: (dog) => dog.name,
});

const dogSlice = createSlice({
  name: "dog",
  initialState: dogEntity.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getDogs.fulfilled, (state, action) => {
      dogEntity.setAll(state, action.payload);
    });
  },
});

export const dogSelectors = dogEntity.getSelectors((state) => state.dog);
export default dogSlice.reducer;
