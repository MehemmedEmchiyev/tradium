import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modal : false
}

export const quickViewSlice = createSlice({
  name: 'quick_view',
  initialState,
  reducers: {
    setModal : (state) => {
        state.modal = !state.modal
    }
  },
})

export const { setModal } = quickViewSlice.actions

export default quickViewSlice.reducer