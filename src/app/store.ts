import {configureStore} from "@reduxjs/toolkit"
import HangmanReducer from "../features/HangmanSlice"

export const store = configureStore({
  reducer: {
    hangman: HangmanReducer
  }
})

export type AppDispatch = typeof store.dispatch
