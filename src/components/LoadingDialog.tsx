import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { selectApiStatus, selectError } from "../features/HangmanSlice";

const LoadingDialog = () => {
  const status = useSelector(selectApiStatus);
  const error = useSelector(selectError);
  return (
    <Dialog
      open={status === "pending" || error !== null}
      sx={{
        "& .MuiPaper-root": {
          p: "2rem",
          borderRadius: "2.5rem",
        },
      }}
    >
      {status === "pending" && (
        <DialogContent
          sx={{
            textAlign: "center",
          }}
        >
          <CircularProgress
            sx={{ height: "100px !important", width: "100px !important" }}
          />
        </DialogContent>
      )}
      <DialogTitle fontSize="3rem" textAlign="center">
        {status === "pending" ? "Loading ..." : error}
      </DialogTitle>
      {error && (
        <DialogContent>
          <DialogContentText textAlign="center" fontSize="1.4rem">
            Please Refresh the Page
          </DialogContentText>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default LoadingDialog;
