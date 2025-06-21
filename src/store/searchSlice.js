import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchStatue : false
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchStatue : (state) => {
        state.searchStatue = !state.searchStatue
    }
  },
})

export const { changeSearchStatue } = searchSlice.actions

export default searchSlice.reducer