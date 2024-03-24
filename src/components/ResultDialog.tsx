import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@mui/system/styled";
import useHangmanStatus from "../hooks/useHangmanStatus";

const TypographyHeading = styled(Typography)({
  fontSize: "2rem",
  textAlign: "center",
  marginBottom: "1rem",
});

const ResultDialog = () => {
  const { isLoser, isWinner } = useHangmanStatus();
  return (
    <>
      {isLoser || isWinner ? (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            background: "rgb(0,0,0,.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#121212",
              p: "3rem",
              borderRadius: "2.5rem",
              mt: "6rem",
            }}
          >
            {isWinner && (
              <TypographyHeading>🎉 Congrats, You Won</TypographyHeading>
            )}
            {isLoser && (
              <TypographyHeading>😞 Sorry, you lost!</TypographyHeading>
            )}
            <Typography fontSize="1.4rem" textAlign="center">
              Press Enter or Refresh page to play again
            </Typography>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default ResultDialog;
