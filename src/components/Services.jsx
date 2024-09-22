import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import {
  WbSunny,
  MonetizationOn,
  EvStation,
  Agriculture,
} from "@mui/icons-material";
import solarSolutionsImg from "../assets/residential.jpg";
import netMeteringImg from "../assets/solar1.jpg";
import solarFinancingImg from "../assets/solar2.jpg";
import agricultureImg from "../assets/solar4.jpg";
import bgImage from "../assets/heroBanner.webp";

// Array of services data
const services = [
  {
    title: "Solar Solutions",
    description: "Harness the power of the sun to meet your energy needs.",
    icon: <WbSunny sx={{ color: "#fcb916", fontSize: "2rem" }} />,
    image: solarSolutionsImg,
    alt: "Solar Solutions",
  },
  {
    title: "Net Metering",
    description: "Save energy costs by selling excess power back to the grid.",
    icon: <EvStation sx={{ color: "#fcb916", fontSize: "2rem" }} />,
    image: netMeteringImg,
    alt: "Net Metering",
  },
  {
    title: "Solar Financing",
    description: "Affordable financing options for your solar projects.",
    icon: <MonetizationOn sx={{ color: "#fcb916", fontSize: "2rem" }} />,
    image: solarFinancingImg,
    alt: "Solar Financing",
  },
  {
    title: "Agricultural",
    description: "Solar solutions for efficient agricultural processes.",
    icon: <Agriculture sx={{ color: "#fcb916", fontSize: "2rem" }} />,
    image: agricultureImg,
    alt: "Agricultural",
  },
];

const Services = () => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${bgImage}')`, // Image with opacity
        backgroundSize: "cover", // Make sure the image covers the whole area
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent repetition
        minHeight: "90vh", // Full-screen height
        backgroundAttachment: "fixed", // Fixed background
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        sx={{ color: "#FFFFFF", marginBottom: "20px", fontWeight: "bold" }}
      >
        What We Do
      </Typography>
      <Typography
        sx={{ marginBottom: "50px", color: "#FFFFFF", fontSize: "1.1rem" }}
      >
        At AMA Energy, we specialize in providing innovative solar solutions
        that empower Pakistan’s transition toward sustainable energy sources.
      </Typography>

      {/* Services Grid */}
      <Grid container spacing={4} justifyContent="center">
        {/* Mapping through services array */}
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                borderRadius: "20px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow:
                    "0 10px 20px rgba(255, 255, 255, 0.5), 0 10px 20px rgba(0, 0, 0, 0.1)", // Add white shadow
                },
                boxShadow:
                  "0 4px 12px rgba(255, 255, 255, 0.4), 0 4px 12px rgba(0, 0, 0, 0.05)",
                backgroundColor: "white",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={service.image}
                alt={service.alt}
                sx={{
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
              />
              <CardContent>
                <IconButton>{service.icon}</IconButton>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ color: "#333", fontWeight: "bold" }}
                >
                  {service.title}
                </Typography>
                <Typography sx={{ color: "#777", fontSize: "0.9rem" }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
