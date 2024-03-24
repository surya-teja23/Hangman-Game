import Box from "@mui/material/Box";
import { Head, Body, RightArm, LeftArm, RightLeg, LeftLeg } from "./BodyParts";
import HangmanPoleParts from "../reusableComponents/HangmanPoleParts";

import useHangmanStatus from "../hooks/useHangmanStatus";

const HangmanPoleBase = () => {
  return <HangmanPoleParts height="8px" width="200px" />;
};

const HangmanPole = () => {
  return <HangmanPoleParts height="320px" width="8px" ml="96px" />;
};

const HangmanSupportBeam = () => {
  return <HangmanPoleParts height="8px" width="160px" ml="96px" />;
};
const HangmanRope = () => {
  return <HangmanPoleParts height="40px" width="8px" position="absolute" />;
};

const HangmanDrawing = () => {
  const BODY_PARTS = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];
  const noOfMistakes = useHangmanStatus().inactiveLetters.length;

  return (
    <Box position="relative">
      {BODY_PARTS.slice(0, noOfMistakes).map((Component, index) => {
        return <Component key={index} />;
      })}
      <HangmanRope />
      <HangmanSupportBeam />
      <HangmanPole />
      <HangmanPoleBase />
    </Box>
  );
};

export default HangmanDrawing;
