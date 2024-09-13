import React from "react";
import { Box, Button, Typography } from "@mui/material";
import heroBanner from "../assets/heroBanner.webp";
import { Link } from "react-router-dom";

const heroData = {
  title: "Sunit Solars – Conserve Energy to Preserve Future",
  description:
    "Sunit Solar is committed to delivering a comfortable and eco-friendly lifestyle to society by providing energy solutions for an ideal today and a healthy tomorrow.",
  isButton: true,
};

const HeroSection = ({ data }) => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh", // Full-screen height
        backgroundAttachment: "fixed", // Fixed background
        backgroundImage: `url(${heroBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        margin: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          zIndex: 2,
          maxWidth: "800px",
          padding: "0 20px",
          ["@media (max-width:600px)"]: {
            maxWidth: "90%", // Responsive width for mobile screens
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Poppins",
            marginBottom: "20px",
            fontWeight: "bold",
            fontSize: "2.5rem", // Adjusted size for desktop
            ["@media (max-width:600px)"]: {
              fontSize: "1.5rem", // Adjusted size for mobile
            },
          }}
        >
          {data?.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            lineHeight: "1.5",
            marginBottom: "30px",
            ["@media (max-width:600px)"]: {
              fontSize: "14px", // Smaller text for mobile
            },
          }}
        >
          {data?.description}
        </Typography>
        {data?.isButton && (
          <Button
            variant="contained"
            component={Link}
            to="/contact-us"
            sx={{
              backgroundColor: "#fcb916",
              color: "black",
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
              ["@media (max-width:600px)"]: {
                padding: "8px 15px", // Adjust padding for mobile
                fontSize: "14px", // Smaller button text for mobile
              },
            }}
          >
            Get a Quote
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default HeroSection;
