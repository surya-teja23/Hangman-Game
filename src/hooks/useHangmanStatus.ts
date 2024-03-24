import { useSelector } from "react-redux";
import {
  selectGuessedLetters,
  selectWordToGuess,
} from "../features/HangmanSlice";

const useHangmanStatus = () => {
  const wordToGuess = useSelector(selectWordToGuess);
  const guessedLetters = useSelector(selectGuessedLetters);
  const activeLetters = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter)
  );
  const inactiveLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isWinner =
    wordToGuess !== "" &&
    wordToGuess.split("").every((letter) => activeLetters.includes(letter));
  const isLoser = inactiveLetters.length >= 6;

  return { activeLetters, inactiveLetters, isWinner, isLoser };
};

export default useHangmanStatus;
