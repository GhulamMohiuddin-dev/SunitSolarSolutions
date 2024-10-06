import React, { useState, useEffect } from "react";
import { Box, Modal, Card, CardContent, Button, IconButton } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close'
import ContactUs from "./ContactUs";

// Fade in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Bounce in animation
const bounceIn = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

// Pulse effect for button
const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
  }
`;

// Glow effect
const glowEffect = keyframes`
  0% {
    box-shadow: 0 0 10px #fcb916, 0 0 20px #fcb916, 0 0 30px #fcb916;
  }
  50% {
    box-shadow: 0 0 20px #fcb916, 0 0 30px #fcb916, 0 0 40px #fcb916;
  }
  100% {
    box-shadow: 0 0 10px #fcb916, 0 0 20px #fcb916, 0 0 30px #fcb916;
  }
`;

// Styled components
const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    justifyContent: "center",
  },
}));

const ModalContent = styled(Card)(({ theme }) => ({
  width: "400px",
  height: "80%",
  maxWidth: "100%",
  backgroundColor: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  animation: `${fadeIn} 0.8s ease, ${bounceIn} 1s ease`, // Combined fade-in and bounce-in animation
  borderRadius: "15px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  position: "fixed",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    height: "auto",
  },
  '&:hover': {
    animation: `${glowEffect} 2s infinite`, // Glow effect on hover
  },
}));

const ContactModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpen(true);
    }, 40000); // Open every 3 seconds for demo purposes

    return () => clearInterval(intervalId);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledModal open={open} onClose={handleClose}>
      <ModalContent>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}
      >
        <CloseIcon />
      </IconButton>
        <CardContent>
          <ContactUs isTrue={false} />
        </CardContent>
      </ModalContent>
    </StyledModal>
  );
};

export default ContactModal;
