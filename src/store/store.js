import { configureStore } from '@reduxjs/toolkit'
import hamMenuSlice from './hamMenuSlice'
import searchSlice from './searchSlice'
import basketSlice from './basketSlice'
import quickViewSlice from './quickViewSlice'
import { tradiumApi } from './tradiumApi'

export const store = configureStore({
  reducer: {
    [tradiumApi.reducerPath]: tradiumApi.reducer,
    hamMenuStatue: hamMenuSlice,
    searchStatue: searchSlice,
    basketStatus: basketSlice,
    quickView: quickViewSlice

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tradiumApi.middleware),
})