import { useEffect} from "react"
import { useSelector, useDispatch } from "react-redux";
import {
  addGuessedLetter,
  fetchNewWord,
  reset,
  selectGuessedLetters,
} from "../features/HangmanSlice";
import { AppDispatch } from "../app/store";
import useHangmanStatus from "./useHangmanStatus";

const useKeyboardPress = () => {
  const { isWinner, isLoser } = useHangmanStatus();
  const guessedLetters = useSelector(selectGuessedLetters);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      dispatch(reset());
      dispatch(fetchNewWord());
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [dispatch]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      dispatch(addGuessedLetter({ letter: key, isWinner, isLoser }));
    };

    document.addEventListener("keypress", handler);

    return () => document.removeEventListener("keypress", handler);
  }, [guessedLetters, dispatch, isLoser, isWinner]);
};

export default useKeyboardPress;
