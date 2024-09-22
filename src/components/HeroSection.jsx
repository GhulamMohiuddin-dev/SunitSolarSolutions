import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import video from "../assets/Solar_Panels.webm";

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
        height: "100vh", // Full-screen height
        width: "100%", // Full-screen width
        // padding: 0,
        marginTop: "-25px",
        display: "flex",  
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        overflow: "hidden", // Ensures no scrollbars appear
        zIndex: 1,
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onTimeUpdate={(e) => {
          if (e.target.currentTime >= 60) {
            e.target.currentTime = 0; // Reset to the beginning
          }
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures the video covers the entire area
          zIndex: 0,
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Content */}
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
