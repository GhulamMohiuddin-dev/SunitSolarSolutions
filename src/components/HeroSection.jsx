import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import video from "../../public/assets/Solar_Panels.webm";
import heroBanner from "../../public/assets/heroBanner.webp";

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
        height: "100vh", // Full viewport height
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        overflow: "hidden", // Ensure no scrollbars appear
        zIndex: 1,
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroBanner}
        preload="auto"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%", // Ensure full height
          objectFit: "cover", // Covers the entire area
          zIndex: 0,
        }}
      >
        <source src={video} type="video/webm" />
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
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Poppins",
            marginBottom: "20px",
            fontWeight: "bold",
            fontSize: { xs: "1.8rem", md: "2.5rem" }, // Responsive font size
          }}
        >
          {data?.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", md: "18px" }, // Responsive font size
            lineHeight: "1.5",
            marginBottom: "30px",
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
              padding: { xs: "8px 15px", md: "10px 20px" }, // Responsive padding
              fontSize: { xs: "14px", md: "16px" }, // Responsive font size
              fontWeight: "bold",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "scale(1.05)",
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
