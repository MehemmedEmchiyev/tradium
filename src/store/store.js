import { configureStore } from '@reduxjs/toolkit'
import hamMenuSlice  from './hamMenuSlice'
import searchSlice  from './searchSlice'
import basketSlice  from './basketSlice'
import quickViewSlice  from './quickViewSlice'

export const store = configureStore({
  reducer: {
    hamMenuStatue : hamMenuSlice,
    searchStatue : searchSlice,
    basketStatus : basketSlice,
    quickView : quickViewSlice
  },
})