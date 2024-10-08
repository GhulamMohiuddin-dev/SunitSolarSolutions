import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import { WbSunny, Build, Nature, EmojiNature } from "@mui/icons-material";
import heroBanner from "../../public/assets/heroBanner.webp";

// Array of accomplishments data
const accomplishments = [
  {
    title: "KW Installed PV Capacity",
    value: 5000,
    icon: <WbSunny sx={{ color: "#fcb916", fontSize: { xs: "2rem", md: "3rem" } }} />, // Responsive icon size
  },
  {
    title: "Successfully Completed Projects",
    value: 120,
    icon: <Build sx={{ color: "#fcb916", fontSize: { xs: "2rem", md: "3rem" } }} />, // Responsive icon size
  },
  {
    title: "Ton/Annually Carbon Footprint Reduction",
    value: 3500,
    icon: <Nature sx={{ color: "#fcb916", fontSize: { xs: "2rem", md: "3rem" } }} />, // Responsive icon size
  },
  {
    title: "Annually Trees Planted",
    value: 1000,
    icon: <EmojiNature sx={{ color: "#fcb916", fontSize: { xs: "2rem", md: "3rem" } }} />, // Responsive icon size
  },
];

// Number animation hook
const useCountUp = (end, duration) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10); // Calculate the increment
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);
    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const Accomplishments = () => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${heroBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: 'fixed', // Fixed background
        backgroundRepeat: "no-repeat",
        minHeight: "90vh", // Full-screen height
        padding: { xs: "40px 15px", md: "60px 20px" }, // Adjust padding for mobile
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
          fontWeight: "bold",
          textAlign: "top",
          marginBottom: { xs: "50px", md: "100px" }, // Adjust margin for mobile
          fontSize: { xs: "1.8rem", md: "2.5rem" }, // Responsive font size for heading
        }}
      >
        Accomplishments
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {accomplishments.map((item, index) => {
          const count = useCountUp(item.value, 2000); // 2 seconds animation

          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center", // Center the items
                  padding: "20px",
                  height: "100%", // Ensure full height
                }}
              >
                <IconButton>{item.icon}</IconButton>
                <Typography
                  variant="h3" // Bigger font size for number
                  sx={{
                    color: "#fcb916",
                    fontWeight: "bold",
                    marginBottom: "10px",
                    textAlign: "center",
                    fontSize: { xs: "2rem", md: "3rem" }, // Responsive number size
                  }}
                >
                  {count}+
                </Typography>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: { xs: "0.9rem", md: "1rem" }, // Smaller font size for mobile
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Accomplishments;
