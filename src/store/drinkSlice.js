import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'drink',
  initialState: {
    value: {}
  },
  reducers: {
    addDrink: (state, action) => {
      state.value = action.payload;
    },
 },
});

export const { addDrink } = slice.actions;

export const getDrinkById = idDrink => {
  return async(dispatch) => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${idDrink}`);
      const data = await response.json();
      dispatch(addDrink(data.drink));
    } catch (err) {
      console.error(err);
    }
  };
}


export const getDrink = state => state.drink.value;

export default slice.reducer;