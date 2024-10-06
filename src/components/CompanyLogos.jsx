import React from "react";
import Slider from "react-slick";
import { Box, CardMedia } from "@mui/material";

// Array of logo data
const companyLogos = [
    { name: "Huawei", logoSrc: "/assets/huawei.svg" },
    { name: "Jinko Solar", logoSrc: "/assets/jinko-solar-logo.svg" },
    { name: "Trina Solar", logoSrc: "/assets/trina-solar-logo.svg" },
    { name: "JA Solar", logoSrc: "/assets/JA.svg" },
    { name: "Longi", logoSrc: "/assets/longi-seeklogo.svg" },
    { name: "GoodWe", logoSrc: "/assets/goodwe-logo-vector-2022.svg" },
    { name: "Solis", logoSrc: "/assets/solis.svg" },
  ];

// Slider settings
const sliderSettings = {
  dots: false,
  arrows: false, // Disable arrows
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const CompanyLogos = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: { xs: "20px 15px", md: "20px 20px" },
      }}
    >
      <Slider {...sliderSettings}>
        {companyLogos.map((company, index) => (
          <Box key={index} sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            height: "80px", // Fixed height for centering
          }}>
            <CardMedia
              component="img"
              alt={company.name}
              src={company.logoSrc}
              sx={{
                maxHeight: "120%", // Limit the height of the logos
                width: "auto", // Allow width to auto adjust based on height
                maxWidth: "100px", // Set a maximum width for consistency
                objectFit: "contain", 
                height: "auto", // Maintain aspect ratio
                // filter: "grayscale(1) brightness(0.9)",
                // "&:hover": {
                //   filter: "grayscale(0)",
                //   transition: "filter 0.3s ease",
                // },
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CompanyLogos;
