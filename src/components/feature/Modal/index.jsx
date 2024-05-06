import React from "react";
import { Box, Button } from "@mui/material";
import "./modal.css"; // Import your CSS file for styling

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Box className="modal-overlay">
      <Box className="modal">
        <Box className="modal-content">
          {children}
          <Box>
            <Button className="close-button" onClick={onClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Modal;
