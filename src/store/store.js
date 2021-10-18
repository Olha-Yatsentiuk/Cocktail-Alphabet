import { configureStore } from '@reduxjs/toolkit'
import cocktailsReducer from './cocktailListSlice'

export default configureStore({
  reducer: {
    cocktails: cocktailsReducer,
  }
})