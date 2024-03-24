import Box from "@mui/material/Box";
import Limb from "../reusableComponents/Limb";

const Head = () => {
  return (
    <Box
      sx={{
        height: "56px",
        width: "56px",
        borderRadius: "50%",
        border: "8px solid white",
        position: "absolute",
        top: "40px",
        right: "-24px",
      }}
    />
  );
};

const Body = () => {
  return (
    <Box
      sx={{
        height: "80px",
        width: "8px",
        backgroundColor: "white",
        position: "absolute",
        top: "96px",
        right: 0,
      }}
    />
  );
};

const RightArm = () => {
  return (
    <Limb top="120px" right="-80px" rotate="-30deg" origin="left bottom" />
  );
};

const LeftArm = () => {
  return <Limb top="120px" right="8px" rotate="30deg" origin="right bottom" />;
};

const RightLeg = () => {
  return <Limb top="168px" right="-72px" rotate="60deg" origin="left bottom" />;
};

const LeftLeg = () => {
  return <Limb top="168px" right="0px" rotate="-60deg" origin="right bottom" />;
};

export { Head, Body, RightArm, LeftArm, RightLeg, LeftLeg };
