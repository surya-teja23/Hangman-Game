import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../hooks/useAxios";

type HangmanState = {
  wordToGuess: string;
  guessedLetters: string[];
  status: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | null;
};

type addGuessedLetterProps = {
  letter: string
  isWinner: boolean
  isLoser: boolean
}

const initialState: HangmanState = {
  wordToGuess: "",
  guessedLetters: [],
  status: "idle", // idle | pending | fulfilled | rejected
  error: null,
};

const hangmanSlice = createSlice({
  name: "hangman",
  initialState,
  reducers: {
    addGuessedLetter: (state, action: PayloadAction<addGuessedLetterProps>) => {
      const {letter, isLoser,isWinner} = action.payload;
      if (!state.guessedLetters.includes(letter) && !isWinner && !isLoser) {
        state.guessedLetters.push(letter);
      }
    },
    reset: (state) => {
      state.wordToGuess = "";
      state.guessedLetters = [];
      state.status = "idle";
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewWord.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchNewWord.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = "fulfilled";
        state.wordToGuess = action.payload;
      })
      .addCase(fetchNewWord.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message as string;
      });
  },
});

export const fetchNewWord = createAsyncThunk(
  "hangman/fetchNewWord",
  async () => {
    try {
      const response = await api.get("/");
      return response.data[0];
    } catch (error) {
      throw Error("Failed to fetch a new word");
    }
  }
);

export const { addGuessedLetter, reset } = hangmanSlice.actions;
export const selectWordToGuess = (state: {hangman: HangmanState}) => state.hangman.wordToGuess;
export const selectGuessedLetters = (state: {hangman: HangmanState}) => state.hangman.guessedLetters;
export const selectApiStatus = (state: {hangman: HangmanState}) => state.hangman.status; 
export const selectError = (state: {hangman: HangmanState}) => state.hangman.error;
export default hangmanSlice.reducer;
