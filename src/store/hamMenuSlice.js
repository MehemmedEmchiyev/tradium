import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  statue : false
}

export const hamMenuSlice = createSlice({
  name: 'hamMenu',
  initialState,
  reducers: {
    changeStatue : (state) => {
        state.statue = !state.statue
    }
  },
})

export const { changeStatue } = hamMenuSlice.actions

export default hamMenuSlice.reducer