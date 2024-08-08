import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { selectCharMapping, selectWordToGuess } from "../features/HangmanSlice";
import useHangmanLetterStatus from "../hooks/useHangmanStatus";

const HangmanWord = () => {
  const wordToGuess =
    useSelector(selectWordToGuess) || `${process.env.REACT_APP_WORD}`;
  const charMapping = useSelector(selectCharMapping);
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
        marginBottom: "1rem"
      }}
    >
      {wordToGuess.split("").map((letter, index) => {
        return (
          <Box
            component="span"
            key={index}
            sx={{ borderBottom: ".1em solid white", position: "relative" }}
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
            <Box sx={{
              position: "absolute",
              color: "grey",
              fontSize: "1rem",
              bottom: "-2rem",
              left: "50%",
              transform: "translateX(-50%)",
            }}>
              {charMapping.get(letter)}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default HangmanWord;
