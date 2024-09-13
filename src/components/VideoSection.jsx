import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import HeroSection from "./HeroSection";
import video from "../assets/Solar_Panels.mp4";

const VideoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "60px 20px",
  backgroundColor: "#f8f9fa",
  maxWidth: "100%", // Ensure container width is 100% of its parent
  maxHeight: "calc(100vh - 120px)", // Adjust this value as needed
  overflow: "hidden", // Prevent overflow
  [theme.breakpoints.down("sm")]: {
    padding: "40px 10px",
  },
}));

const VideoTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#333",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

const StyledVideo = styled("video")(({ theme }) => ({
  width: "100%",
  maxWidth: "800px", // Adjust as needed
  height: "auto",
  maxHeight: "100%", // Ensure it scales properly
}));


const heroData = {
  title: "Discover Our Journey",
  description:
    "Watch this video to learn more about our commitment to solar energy and how we strive to make a positive impact. See our journey and the passion behind our mission.",
};

const VideoSection = () => {
  return (
    <>
      <HeroSection data={heroData} />
      <VideoContainer>
        <VideoTitle variant="h4">Watch Our Story</VideoTitle>
        <StyledVideo controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </StyledVideo>
      </VideoContainer>
    </>
  );
};

export default VideoSection;
