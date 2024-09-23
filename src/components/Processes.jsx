import React from "react";
import { Box, Typography, Card } from "@mui/material";
import { styled } from "@mui/system";
import heroBanner from "../../public/assets/heroBanner.webp";
import { CheckCircle, Build, Assignment, MonetizationOn, Power } from "@mui/icons-material";

const processSteps = [
  { text: "Initial Survey and Quote", icon: <CheckCircle /> },
  { text: "Finalization of Contract", icon: <Assignment /> },
  { text: "Detail Design", icon: <Build /> },
  { text: "Project End", icon: <Power /> },
  { text: "Net Metering", icon: <MonetizationOn /> },
  { text: "Project Installation and Commissioning", icon: <Power /> },
];

// Custom styled components for a modern and fun look
const StepContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
  padding: "60px 20px",
}));

const StepCard = styled(Card)(({ theme, index }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px",
  borderRadius: "8px",
  width: "100%",
  maxWidth: "600px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  backgroundColor: index % 2 === 0 ? "#ffe0b2" : "#bbdefb", // Alternate colors
  transition: "transform 0.2s",
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column", // Stack items on mobile
    alignItems: "center",
    textAlign: "left",
  },
}));

const Circle = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: "#fcb916",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: "bold",
  transition: "transform 0.3s",
  '&:hover': {
    transform: 'scale(1.2)',
  },
  marginBottom: "10px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "20px"
  }, // Space below the circle
}));

const Processes = () => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        minHeight: "90vh",
        padding: "60px 20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#FFFFFF",
          marginBottom: "40px",
          fontWeight: "bold",
        }}
      >
        Our Process
      </Typography>

      <StepContainer>
        {processSteps.map((step, index) => (
          <StepCard key={index} index={index}>
            <Circle>{index + 1}</Circle>
            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: "5px", sm: "10px" } }}>
              {step.icon}
              <Typography
                variant="h6"
                sx={{
                  color: "#333",
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", sm: "1.2rem" }, // Responsive font size
                }}
              >
                {step.text}
              </Typography>
            </Box>
          </StepCard>
        ))}
      </StepContainer>
    </Box>
  );
};

export default Processes;
