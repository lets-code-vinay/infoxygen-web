import React from "react";
import { Snackbar, Alert } from "@mui/material";

const Notification = ({
  open,
  onClose,
  title,
  description,
  type = "info",
  origin = { vertical: "top", horizontal: "center" },
  hideOutTime = 6000,
}) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    onClose();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={hideOutTime}
      onClose={handleClose}
      anchorOrigin={origin}
    >
      <Alert
        onClose={handleClose}
        severity={type}
        sx={{ width: "100%" }}
        title={title}
      >
        {description}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
