import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  Rating,
} from "@mui/material";
import { Star, ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroBanner from "../../public/assets/heroBanner.webp";

const reviews = [
  {
    name: "Khurram Sultan",
    avatar: "",
    rating: 5,
    review:
      "Have worked with this firm for my 2 projects and i am very satisfied with their work and quality.Also the process is seamless and was completed within their quoted timeline👍.Will recommend it 100%",
  },
  {
    name: "Mushfiq Ahmed",
    avatar: "",
    rating: 4,
    review:
      "Fully satisfied with the quality of work. Project was done within the given timeline and the whole team is very professional. Highly recommended.",
  },
  {
    name: "Abuzar Sajjad",
    avatar: "",
    rating: 4.5,
    review:
      "Excellent customer service, affordable prices, and quality work. definitely an all in one solution. Highly recommended",
  },
  {
    name: "Hamza Hasan",
    avatar: "",
    rating: 5,
    review:
      "Great overall experience, high quality work done. Trained staff and highly recommended. 👌",
  },
  {
    name: "Humble Ahmed",
    avatar: "",
    rating: 4,
    review:
      "The best company for installation of solar system in lahore. Totally worth your money.",
  },
];

// Custom arrow components
const CustomPrevArrow = ({ onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "50%",
      left: "-30px",
      transform: "translateY(-50%)",
      width: "40px",
      height: "40px",
      backgroundColor: "#fcb916",
      borderRadius: "50%",
      cursor: "pointer",
      zIndex: 1,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      "&:hover": {
        backgroundColor: "#e3a700",
      },
    }}
  >
    <ArrowBackIos sx={{ color: "#fff", fontSize: "1.2rem" }} />
  </Box>
);

const CustomNextArrow = ({ onClick }) => (
  <Box
    onClick={onClick}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "50%",
      right: "-30px",
      transform: "translateY(-50%)",
      width: "40px",
      height: "40px",
      backgroundColor: "#fcb916",
      borderRadius: "50%",
      cursor: "pointer",
      zIndex: 1,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      "&:hover": {
        backgroundColor: "#e3a700",
      },
    }}
  >
    <ArrowForwardIos sx={{ color: "#fff", fontSize: "1.2rem" }} />
  </Box>
);

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${heroBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Fixed background
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", // Full-screen height
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
          color: "#fff",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Customer Reviews
      </Typography>
      <Typography
        sx={{ marginBottom: "50px", color: "#FFFFFF", fontSize: "1.1rem" }}
      >
        At Sunit Solars, we make a very simple promise. We do solar and we do it
        right.
      </Typography>

      <Box
        sx={{
          width: "90%", // Adjust the width here to bring arrows closer
          margin: "0 auto",
          position: "relative",
        }}
      >
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <Box key={index} sx={{ padding: "10px" }}>
              <Card
                sx={{
                  padding: "20px",
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
                  height: "330px", // Set a fixed height for uniformity
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "20px",
                  }}
                >
                  <Avatar
                    src={review.avatar}
                    alt={review.name}
                    sx={{
                      width: 80,
                      height: 80,
                      marginBottom: "15px",
                      border: "3px solid #fcb916",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#555",
                      marginBottom: "10px",
                    }}
                  >
                    {review.name}
                  </Typography>
                  <Rating
                    value={review.rating}
                    precision={0.5}
                    readOnly
                    sx={{
                      marginBottom: "10px",
                      "& .MuiRating-iconFilled": {
                        color: "#fcb916",
                      },
                    }}
                    icon={<Star fontSize="inherit" />}
                  />
                  <Typography
                    sx={{
                      color: "#777",
                      fontSize: "0.95rem",
                      flexGrow: 1,
                      // maxHeight: "60px", // Limit height for the text
                      // overflow: "hidden", // Hide overflow
                      // textOverflow: "ellipsis", // Add ellipsis for overflow text
                      // display: "-webkit-box", // For ellipsis
                      // WebkitBoxOrient: "vertical",
                      // WebkitLineClamp: 3, // Limit to 3 lines
                    }}
                  >
                    {review.review}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default CustomerReviews;
