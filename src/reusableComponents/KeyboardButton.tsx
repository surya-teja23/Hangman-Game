import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import useHangmanStatus from "../hooks/useHangmanStatus";
import { addGuessedLetter } from "../features/HangmanSlice";

type KeyboardButtonProps = {
  letter: string;
};

const KeyboardButton = ({ letter }: KeyboardButtonProps) => {
  const { activeLetters, inactiveLetters, isWinner, isLoser } =
    useHangmanStatus();

  const isActive = activeLetters.includes(letter);
  const isInactive = inactiveLetters.includes(letter);

  const dispatch = useDispatch<AppDispatch>();
  return (
    <Button
      onClick={() => {
        dispatch(addGuessedLetter({ letter: letter, isWinner, isLoser }));
      }}
      color={isActive ? "success" : "primary"}
      sx={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        "&:disabled": {
          backgroundColor: isActive ? "#388e3c" : "rgb(255,255,255,.12)",
          color: isActive ? "rgb(0,0,0,.87)" : "rgba(255,255,255,.3)",
          cursor: "not-allowed",
          pointerEvents: "none",
        },
      }}
      variant="contained"
      disabled={isInactive || isActive || isWinner || isLoser}
    >
      {letter}
    </Button>
  );
};

export default KeyboardButton;
