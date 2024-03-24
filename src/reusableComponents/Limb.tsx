import Box from "@mui/material/Box";

type LimbProps = {
  top: string;
  right: string;
  rotate: string;
  origin: string;
};

const Limb = ({ top, right, rotate, origin }: LimbProps) => {
  return (
    <Box
      sx={{
        height: "8px",
        width: "80px",
        backgroundColor: "white",
        position: "absolute",
        top,
        right,
        rotate,
        transformOrigin: origin,
      }}
    />
  );
};

export default Limb;
