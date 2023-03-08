import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './BookSlice'
export const store = configureStore({
    reducer: {
      bookSlice,
    },
  })