import React from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Card,
  CardContent,
  Grow,
  Button,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faBullseye } from "@fortawesome/free-solid-svg-icons";
import HeroSection from "./HeroSection";
import useScrollToHash from "../hooks/useScrollToHash";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "John has over 20 years of experience in the solar industry. His leadership and vision drive our mission to provide sustainable energy solutions.",
  },
  {
    name: "Jane Smith",
    position: "COO",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Jane is the operational backbone of the company, ensuring that every project runs smoothly and meets the highest standards.",
  },
  {
    name: "Alice Johnson",
    position: "CTO",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Alice leads our technology strategy, keeping us at the forefront of solar innovations and ensuring the best technical solutions for our clients.",
  },
];

const heroData = {
  title: "About Us",
  description:
    "We are committed to delivering the best in solar technology and customer service. Our team of experts is dedicated to making solar energy accessible and affordable for everyone.",
};

const AboutUs = () => {
  useScrollToHash();
  return (
    <>
      <HeroSection data={heroData} />
      <Box
        sx={{
          padding: "60px 20px",
          backgroundColor: "#f8f9fa",
          textAlign: "center",
        }}
      >
        {/* <Typography
          variant="h4"
          sx={{ color: "#333", fontWeight: "bold", mb: 4, mt: 4 }}
          id="team"
        >
          Meet The Team
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  padding: "20px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-10px)",
                  },
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
                    src={member.avatar}
                    alt={member.name}
                    sx={{
                      width: 100,
                      height: 100,
                      marginBottom: "15px",
                      border: "3px solid #fcb916",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#555", mb: 1 }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    sx={{ color: "#fcb916", fontSize: "0.95rem", mb: 2 }}
                  >
                    {member.position}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#777",
                      fontSize: "0.9rem",
                      textAlign: "center",
                    }}
                  >
                    {member.bio}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid> */}

        {/* Why Choose Us Section */}
        <Typography
          variant="h4"
          id="team"
          sx={{ color: "#333", fontWeight: "bold", mt: 4, mb: 4 }}
        >
          Why Choose Us?
        </Typography>
        <Box
          sx={{
            padding: "20px",
            textAlign: "center",
            maxWidth: "800px",
            margin: "auto",
          }}
        >
          <Typography sx={{ color: "#555", fontSize: "1rem", mb: 2 }}>
            We are the Solar Energy Specialists driven to create an affordable
            and clean energy future for commercial & industrial entities in the
            region. A one-stop solution to eliminate your ongoing energy crisis.
            There is more about us than usual introductions, a simple procedure
            that enables our customers to understand what they required and
            choose from a wide range that we have to offer to reduce energy
            costs by up to 30% maximum your saving and lower your electricity
            bills solar solution provider for your commercial, residential and
            industrial needs.
          </Typography>
        </Box>

        {/* Vision and Mission Section */}
        <Typography
          variant="h4"
          sx={{ color: "#333", fontWeight: "bold", mt: 8, mb: 4 }}
          id="mission"
        >
          Our Vision & Mission
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Vision Card */}
          <Grid item xs={12} md={5}>
            <Grow in timeout={1000}>
              <Card
                sx={{
                  padding: "30px",
                  textAlign: "left",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardContent>
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    size="2x"
                    style={{ color: "#fcb916", marginBottom: "20px" }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                    Our Vision
                  </Typography>
                  <Typography sx={{ color: "#777", fontSize: "1rem" }}>
                    Our vision is to create a world powered by affordable and
                    customizable solar energy solutions, where sustainability
                    becomes the standard and clean, reliable power is accessible
                    to everyone. We are committed to being the leading provider
                    of innovative, cost-effective solar technologies, delivering
                    exceptional value tailored to each customer's unique needs.
                    Through our dedication to technological advancements and
                    personalized service, we strive to make solar energy the
                    preferred choice for a brighter, more sustainable future.
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>

          {/* Mission Card */}
          <Grid item xs={12} md={5}>
            <Grow in timeout={1500}>
              <Card
                sx={{
                  padding: "30px",
                  textAlign: "left",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardContent>
                  <FontAwesomeIcon
                    icon={faBullseye}
                    size="2x"
                    style={{ color: "#fcb916", marginBottom: "20px" }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                    Our Mission
                  </Typography>
                  <Typography sx={{ color: "#777", fontSize: "1rem" }}>
                    Our mission is to accelerate the adoption of solar energy by
                    offering affordable, customizable solutions that meet the
                    diverse needs of our customers. We aim to make solar energy
                    not only accessible but also flexible and reliable for all,
                    ensuring a greener, more sustainable future while delivering
                    tailored services that maximize both efficiency and savings
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        </Grid>
        <Box marginTop="30px">
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
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
