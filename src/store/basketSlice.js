import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open : false
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setOpen : (state) => {
        state.open = !state.open
    }
  },
})

export const { setOpen } = basketSlice.actions

export default basketSlice.reducer