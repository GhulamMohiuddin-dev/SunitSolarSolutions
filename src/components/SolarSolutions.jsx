import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import industrial from "../assets/Industrial.jpg";
import commercial from "../assets/commercial.jpg";
import residential from "../assets/solar3.jpg"; // lowercase 'r' for consistency
import useScrollToHash from "../hooks/useScrollToHash";

const SectionContainer = styled(Container)(({ theme }) => ({
  padding: "60px 20px",
  backgroundColor: "#f8f9fa",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "40px 10px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#333",
  marginBottom: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
  },
}));

const BoldText = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#333",
  marginBottom: "20px",
  textAlign: "center"
}));

const Description = styled(Typography)(({ theme }) => ({
  color: "#555",
  marginBottom: "30px",
  lineHeight: "1.6",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "500px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  marginBottom: "30px",
  borderRadius: "8px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#fcb916",
  color: "#fff",
  padding: "10px 20px",
  marginTop: "10px",
  fontWeight: "bold",
  fontSize: "16px",
  transition: "background-color 0.3s, transform 0.3s",
  "&:hover": {
    backgroundColor: "#d1a014",
    transform: "scale(1.05)",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "8px 15px",
    fontSize: "14px",
  },
}));

const SolarSolutions = () => {
  useScrollToHash();
  return (
    <SectionContainer>
      <Title variant="h3">Solar Solutions</Title>

      {/* Industrial Solutions Section */}
      <Title variant="h5" id="industrial">
        Industrial Solutions
      </Title>
      <ImageContainer style={{ backgroundImage: `url(${industrial})` }} />
      <Description>
        With the ongoing surge in electricity prices, Pakistan’s medium and
        large-scale industries are finding it harder to stay competitive in
        global markets. For capital-intensive sectors like petrochemicals,
        mining, cement, glass, and oil & gas, the pressure to lower operating
        costs while addressing environmental concerns is immense. These
        industries face additional challenges due to the high energy consumption
        required to run their complex operations efficiently. At Sunit Solar
        Solutions, we offer innovative industrial solar solutions designed to
        address the unique energy demands of your industry. Our solutions
        deliver clean, reliable, and cost-effective power, enabling companies to
        reduce energy expenses and minimize environmental impacts. By
        integrating cutting-edge technology and smart energy management systems,
        we help your industrial operations become more adaptive, data-driven,
        and efficient—ensuring long-term sustainability and competitiveness
      </Description>

      {/* Commercial Solutions Section */}
      <Title variant="h5" id="commercial">
        Commercial Solutions
      </Title>
      <ImageContainer style={{ backgroundImage: `url(${commercial})` }} />
      <Description>
        Businesses that operate during peak daylight hours are ideally suited
        for solar energy. With electricity prices rising dramatically due to
        global inflation and currency challenges, a solar system can provide
        your business with a vital buffer against the financial strain of
        escalating energy costs. At Sunit Solar Solutions, we offer customized
        commercial solar systems that enable businesses to achieve significant
        savings while enhancing operational efficiency. From retail outlets to
        corporate offices, we provide tailored solar energy packages that meet
        your specific energy needs, allowing your business to run more
        sustainably and cost-effectively, while projecting a greener brand
        image.
      </Description>

      {/* Residential Solutions Section */}
      <Title variant="h5" id="residential">
        Residential Solutions
      </Title>
      <ImageContainer style={{ backgroundImage: `url(${residential})` }} />
      <Description>
        At Sunit Solar Solutions, we partner with world-class technology
        providers to offer the most advanced solar solutions for homes. Our
        residential solar systems come with state-of-the-art solar panels,
        high-performance inverters, and round-the-clock cloud-based monitoring
        for continuous support. These systems are designed to provide maximum
        energy output, far surpassing industry standards in terms of efficiency.
        Our net-metering systems allow homeowners to sell excess energy back to
        the grid, turning solar power into an investment that reduces energy
        bills and provides long-term savings. With a seamless installation
        process and comprehensive after-sales maintenance, we ensure that your
        solar energy transition is smooth, reliable, and customized to your
        home’s specific needs.
      </Description>
      <BoldText variant="h4">Steps to Achieve Energy Freedom:</BoldText>
      <BoldText>1. Schedule a Free Survey</BoldText>
      <BoldText>2. Receive a Tailored Solar Plan</BoldText>
      <BoldText>3. Effortless Installation by Our Experts</BoldText>
      

      <StyledButton component={Link} to="/contact-us">
        Contact Us
      </StyledButton>
    </SectionContainer>
  );
};

export default SolarSolutions;
