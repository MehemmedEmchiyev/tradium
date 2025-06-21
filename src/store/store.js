import { configureStore } from '@reduxjs/toolkit'
import hamMenuSlice  from './hamMenuSlice'
import searchSlice  from './searchSlice'

export const store = configureStore({
  reducer: {
    hamMenuStatue : hamMenuSlice,
    searchStatue : searchSlice
  },
})