import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'cocktails',
  initialState: {
    value: [],
  },
  reducers: {
    addList: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addList } = slice.actions;

export const getCocktailsByLetter = letter => {
  return async(dispatch) => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
      const list = await response.json();
      dispatch(addList(list.drinks));
    } catch (err) {
      console.error(err);
    }
  };
}

export const getCocktails = state => state.cocktails.value;

export default slice.reducer;
  