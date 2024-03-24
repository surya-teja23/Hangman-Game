import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { selectWordToGuess } from "../features/HangmanSlice";
import useHangmanLetterStatus from "../hooks/useHangmanStatus";

const HangmanWord = () => {
  const wordToGuess =
    useSelector(selectWordToGuess) || `${process.env.REACT_APP_WORD}`;
  const { inactiveLetters, activeLetters } = useHangmanLetterStatus();
  const isLoser = inactiveLetters.length >= 6;

  return (
    <Box
      sx={{
        display: "flex",
        gap: ".25em",
        fontSize: "4rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => {
        return (
          <Box
            component="span"
            key={index}
            sx={{ borderBottom: ".1em solid white" }}
          >
            <Box
              component="span"
              sx={{
                visibility:
                  activeLetters.includes(letter) || isLoser
                    ? "visible"
                    : "hidden",
                color:
                  !activeLetters.includes(letter) && isLoser ? "red" : "white",
              }}
            >
              {letter}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default HangmanWord;
