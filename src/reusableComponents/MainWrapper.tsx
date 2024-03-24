import { ReactNode } from "react";
import Box from "@mui/material/Box";

type MainWrapperProps = {
  children: ReactNode;
};

const MainWrapper = ({ children }: MainWrapperProps) => {
  return (
    <Box
      sx={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        mx: "auto",
        mt: "3rem",
      }}
    >
      {children}
    </Box>
  );
};

export default MainWrapper;
