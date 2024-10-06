import React from "react";
import { useNavigate } from "react-router-dom";
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
  Business,
  Home,
} from "@mui/icons-material";
import solarSolutionsImg from "../../public/assets/residential.webp";
import netMeteringImg from "../../public/assets/solar1.webp";
import solarFinancingImg from "../../public/assets/solar2.webp";
import agricultureImg from "../../public/assets/solar4.webp";
import bgImage from "../../public/assets/heroBanner.webp";

// Array of services data
const services = [
  {
    title: "Industrial Solar Solutions",
    description:
      "Tailored solar solutions designed for industrial applications to maximize energy efficiency.",
    icon: <Business sx={{ color: "#fcb916", fontSize: "2rem" }} />,
    image: solarSolutionsImg,
    alt: "Industrial Solar Solutions",
    link: "/my-solutions#industrial",
  },
  {
    title: "Commercial Solar Solutions",
    description:
      "Comprehensive solar options for businesses to reduce energy costs and carbon footprint.",
    icon: <WbSunny sx={{ color: "#fcb916", fontSize: "2rem" }} />,
    image: solarFinancingImg,
    alt: "Commercial Solar Solutions",
    link: "/my-solutions#commercial",
  },
  {
    title: "Residential Solar Solutions",
    description:
      "Affordable solar systems for homes to enhance sustainability and save on electricity bills.",
    icon: <Home sx={{ color: "#fcb916", fontSize: "2rem" }} />,
    image: agricultureImg,
    alt: "Residential Solar Solutions",
    link: "/my-solutions#residential",
  },
  {
    title: "Net Metering",
    description: "Save energy costs by selling excess power back to the grid.",
    icon: <EvStation sx={{ color: "#fcb916", fontSize: "2rem" }} />,
    image: netMeteringImg,
    alt: "Net Metering",
    link: "/my-projects",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleCardClick = (link) => {
    navigate(link);
  };
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "90vh",
        backgroundAttachment: "fixed",
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
        sx={{
          marginBottom: "50px",
          color: "#FFFFFF",
          fontSize: { xs: "1rem", md: "1.1rem" },
        }} // Responsive font size
      >
        At SUNit our team of experts is specialized to provide customised and
        affordable solar solutions that can help reduce the cost of electricity.
      </Typography>

      {/* Services Grid */}
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                cursor: "pointer",
                borderRadius: "20px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow:
                    "0 10px 20px rgba(255, 255, 255, 0.5), 0 10px 20px rgba(0, 0, 0, 0.1)",
                },
                boxShadow:
                  "0 4px 12px rgba(255, 255, 255, 0.4), 0 4px 12px rgba(0, 0, 0, 0.05)",
                backgroundColor: "white",
              }}
              onClick={() => handleCardClick(service.link)}
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
