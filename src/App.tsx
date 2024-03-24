import Box from "@mui/material/Box";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import MainWrapper from "./reusableComponents/MainWrapper";
import LoadingDialog from "./components/LoadingDialog";
import useFetchNewWord from "./hooks/useFetchNewWord";
import ResultDialog from "./components/ResultDialog";
import useKeyboardPress from "./hooks/useKeyboardPress";

const App = () => {
  useFetchNewWord();
  useKeyboardPress();

  return (
    <MainWrapper>
      <LoadingDialog />
      <HangmanDrawing />
      <HangmanWord />
      <Box alignSelf="stretch">
        <Keyboard />
      </Box>
      <ResultDialog />
    </MainWrapper>
  );
};

export default App;
