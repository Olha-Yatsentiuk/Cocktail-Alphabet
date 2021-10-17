import { configureStore } from '@reduxjs/toolkit'
import cocktailsReducer from './cocktailSlice'

export default configureStore({
  reducer: {
    cocktails: cocktailsReducer
  }
})