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
import heroBanner from "../assets/heroBanner.webp";

const reviews = [
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "Outstanding service and quality! The team was very professional and the process was seamless.",
  },
  {
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    review:
      "Great experience overall. I’m very satisfied with the installation and customer support.",
  },
  {
    name: "Alice Johnson",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4.5,
    review:
      "Professional and reliable service. The team ensured everything was done to my satisfaction.",
  },
  {
    name: "Michael Brown",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
    review:
      "Excellent communication and top-notch work quality. Highly recommend their services!",
  },
  {
    name: "Emma Wilson",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4,
    review:
      "Friendly and efficient team. The project was completed on time and exceeded expectations.",
  },
  {
    name: "David Lee",
    avatar: "https://randomuser.me/api/portraits/men/53.jpg",
    rating: 4.5,
    review:
      "I’m impressed with their attention to detail and commitment to delivering great results.",
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
        At Sunit Solars, we make a very simple promise. We do solar and we do it right.
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
                      "0 10px 20px rgba(255, 255, 255, 0.5), 0 10px 20px rgba(0, 0, 0, 0.1)", // Add white shadow
                  },
                  boxShadow:
                    "0 4px 12px rgba(255, 255, 255, 0.4), 0 4px 12px rgba(0, 0, 0, 0.05)",
                  backgroundColor: "white",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
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
                  <Typography sx={{ color: "#777", fontSize: "0.95rem" }}>
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
