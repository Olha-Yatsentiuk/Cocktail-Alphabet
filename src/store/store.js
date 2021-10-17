import { configureStore } from '@reduxjs/toolkit'
import cocktailsReducer from './cocktailListSlice'
import drinkReducer from './drinkSlice'

export default configureStore({
  reducer: {
    cocktails: cocktailsReducer,
    drink: drinkReducer
  }
})