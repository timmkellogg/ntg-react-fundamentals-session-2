import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/counterSlice'
import toDoSlice from '../toDo/toDoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    toDos: toDoSlice
  }
})