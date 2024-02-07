import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

export const getFavoriteDogs = createAsyncThunk(
  "favoriteDog/getFavoriteDogs",
  async () => {
    return (
      (await JSON.parse(window.localStorage.getItem("FAVORITE_DOGS"))) || []
    );
  }
);

export const saveFavoriteDog = createAsyncThunk(
  "favoriteDog/addFavoriteDog",
  async ({ name, image_link }) => {
    const prev =
      (await JSON.parse(window.localStorage.getItem("FAVORITE_DOGS"))) || [];
    const newFavoriteDog = { name, image_link };
    const newData = [...prev, newFavoriteDog];
    window.localStorage.setItem("FAVORITE_DOGS", JSON.stringify(newData));
    (await JSON.parse(window.localStorage.getItem("FAVORITE_DOGS"))) || [];

    return newFavoriteDog;
  }
);

export const deleteFavoriteDog = createAsyncThunk(
  "favoriteDog/deleteFavoriteDog",
  async (name) => {
    const data = await JSON.parse(window.localStorage.getItem("FAVORITE_DOGS"));
    const updateData = data.filter((dog) => dog.name !== name);
    window.localStorage.setItem("FAVORITE_DOGS", JSON.stringify(updateData));

    return name;
  }
);

const favoriteDogEntity = createEntityAdapter({
  selectId: (favoriteDog) => favoriteDog.name,
});

const favoriteDogSlice = createSlice({
  name: "favoriteDog",
  initialState: favoriteDogEntity.getInitialState(),
  extraReducers: (builder) => {
    builder.addCase(getFavoriteDogs.fulfilled, (state, action) => {
      favoriteDogEntity.setAll(state, action.payload);
    });
    builder.addCase(saveFavoriteDog.fulfilled, (state, action) => {
      favoriteDogEntity.addOne(state, action.payload);
    });
    builder.addCase(deleteFavoriteDog.fulfilled, (state, action) => {
      favoriteDogEntity.removeOne(state, action.payload);
    });
  },
});

export const favoriteDogSelectors = favoriteDogEntity.getSelectors(
  (state) => state.favoriteDog
);
export default favoriteDogSlice.reducer;
