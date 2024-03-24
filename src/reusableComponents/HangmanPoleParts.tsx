import Box from "@mui/material/Box";

type HangmanPolePartsProps = {
  height: string;
  width: string;
  ml?: string;
  position?: string;
};

const HangmanPoleParts = ({
  height,
  width,
  ml,
  position,
}: HangmanPolePartsProps) => {
  return (
    <Box
      sx={{
        height,
        width,
        backgroundColor: "white",
        ml: ml || 0,
        position: position || "static",
        top: 0,
        right: 0,
      }}
    />
  );
};

export default HangmanPoleParts;
