import React, { useState, useEffect } from "react";
import { Box, Typography, Modal, Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { styled } from "@mui/system";
import ContactUs from "./ContactUs";

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end", // Align to bottom
  justifyContent: "flex-end", // Align to right
}));

const ModalContent = styled(Card)(({ theme }) => ({
  width: "400px", // Set width
  height: "80%",
  maxWidth: "100%",
  position: "fixed",
}));

const ContactModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Open the modal every 30 seconds
    const intervalId = setInterval(() => {
      setOpen(true);
    }, 60000); // 30 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledModal open={open} onClose={handleClose}>
      <ModalContent>
        <CardContent >
          <ContactUs isTrue={false} />
        </CardContent>
      </ModalContent>
    </StyledModal>
  );
};

export default ContactModal;
