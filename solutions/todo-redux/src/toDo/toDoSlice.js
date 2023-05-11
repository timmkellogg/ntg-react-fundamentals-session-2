import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const todoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.value.push(action.payload)
    },
    removeToDo: (state, action) => {
      state.value.splice(action.payload, 1)
    }
  },
})

export const { addToDo, removeToDo } = todoSlice.actions

export default todoSlice.reducer