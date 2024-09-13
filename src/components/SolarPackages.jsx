import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import bgImage from "../assets/heroBanner.webp"; // Assuming you have a background image similar to the one used
import { Link } from "react-router-dom";

// Array of packages data
const packages = [
  {
    title: "Regular",
    power: "5kw",
    energy: "7,500",
    features: [
      "6 x Fans",
      "20 x Lights",
      "1 x Refrigerator",
      "1 x Inverter AC 1.5 Ton",
      "1 x Water pump 1 HP",
    ],
    payback: "Payback Period 2.5 yrs.",
    marla: "5 marla",
    backgroundColor: "#f0f0f0",
  },
  {
    title: "Best Selling",
    power: "10kw",
    energy: "14,000",
    features: [
      "8 x Fans",
      "25 x Lights",
      "1 x Refrigerator",
      "3 x Inverter AC 1.5 Ton",
      "1 x Water pump 1 HP",
    ],
    payback: "Payback Period 2 yrs.",
    marla: "10 marla",
    backgroundColor: "#f0f0f0", // Highlighting the best-selling package
    bestSellingColor: "#fcb916",
  },
  {
    title: "Premium",
    power: "15kw",
    energy: "25,000",
    features: [
      "15 x Fans",
      "35 x Lights",
      "2 x Refrigerator",
      "4 x Inverter AC 1.5 Ton",
      "1 x Water pump 1 HP",
    ],
    marla: "Above 10 marla",
    payback: "Payback Period less than 2 yrs.",
    backgroundColor: "#f0f0f0",
  },
];

const SolarPackages = () => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed", // Fixed background
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "90vh",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        sx={{ color: "#FFFFFF", marginBottom: "20px", fontWeight: "bold" }}
      >
        Lower Your Electricity Bills
      </Typography>
      <Typography
        sx={{ marginBottom: "50px", color: "#FFFFFF", fontSize: "1.1rem" }}
      >
        Discover the Best Solar Solution for your Home
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {packages.map((pkg, index) => (
          <Grid item xs={12} sm={6} md={2.5} key={index}>
            <Card
              sx={{
                borderRadius: "20px",
                padding: "12px 0px 12px 0px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow:
                    "0 10px 20px rgba(255, 255, 255, 0.5), 0 10px 20px rgba(0, 0, 0, 0.1)",
                },
                boxShadow:
                  "0 4px 12px rgba(255, 255, 255, 0.4), 0 4px 12px rgba(0, 0, 0, 0.05)",
                backgroundColor: pkg.backgroundColor,
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: "#333", fontWeight: "bold" }}
                >
                  {pkg.title}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: `${
                      pkg?.bestSellingColor ? pkg?.bestSellingColor : "#333"
                    }`,
                    fontWeight: "bold",
                  }}
                >
                  {pkg.power}
                </Typography>
                <Typography
                  variant="h8"
                  sx={{ color: "#777", fontWeight: "bold" }}
                >
                  {pkg.marla}
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "0.9rem",
                    margin: "10px 0px",
                    borderRadius: "30px",
                    backgroundColor: `${
                      pkg?.bestSellingColor ? pkg?.bestSellingColor : "#333"
                    }`, // Add the desired background color
                    padding: "15px", // Add some padding for a better visual
                    display: "inline-block", // Make sure the background wraps just around the text
                  }}
                >
                  Produce Green Energy Units of Approx. {pkg.energy}
                </Typography>
                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    marginBottom: "20px",
                    color: "#555",
                  }}
                >
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Typography
                  sx={{
                    color: "#777",
                    fontSize: "0.9rem",
                    marginBottom: "20px",
                  }}
                >
                  {pkg.payback}
                </Typography>
                <Button
                  variant="contained"
                  component={Link}
                  to="/contact-us"
                  sx={{
                    borderRadius: "20px",
                    backgroundColor: "#fcb916",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Request a Quote
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SolarPackages;
