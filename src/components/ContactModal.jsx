import React, { useState, useEffect } from "react";
import { Box, Modal, Card, CardContent, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import ContactUs from "./ContactUs";

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end", // Align to bottom for desktop
  justifyContent: "flex-end", // Align to right for desktop
  [theme.breakpoints.down("sm")]: {
    alignItems: "center", // Center for mobile
    justifyContent: "center", // Center for mobile
  },
}));

const ModalContent = styled(Card)(({ theme }) => ({
  width: "400px", // Set width for desktop
  height: "80%",
  maxWidth: "100%",
  position: "fixed",
  [theme.breakpoints.down("sm")]: {
    width: "90%", // Set a smaller width for mobile
    height: "auto", // Allow height to adjust for content
  },
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
        <CardContent>
          <ContactUs isTrue={false} />
        </CardContent>
      </ModalContent>
    </StyledModal>
  );
};

export default ContactModal;
