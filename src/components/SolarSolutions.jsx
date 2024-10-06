import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import com1 from "../../public/assets/com-1.JPG";
import com2 from "../../public/assets/com-2.JPG";
import com3 from "../../public/assets/com-3.JPG";
import com4 from "../../public/assets/com-4.JPG";
import res1 from "../../public/assets/res-1.jpg";
import res2 from "../../public/assets/res-2.jpg";
import res3 from "../../public/assets/res-3.jpg";
import res4 from "../../public/assets/res-4.jpg";
import ind4 from "../../public/assets/ind-4.jpg";
import ind6 from "../../public/assets/ind-6.jpg";
import ind8 from "../../public/assets/ind-8.jpg";
import ind10 from "../../public/assets/ind-10.jpg";
import ind11 from "../../public/assets/ind-11.jpg";










import commercial from "../../public/assets/commercial.webp";
import useScrollToHash from "../hooks/useScrollToHash";
import Slider from "react-slick";

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
  backgroundSize: "cover",
  // overflow: "hidden",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
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

const carouselSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const SolarSolutions = () => {
  useScrollToHash();
  return (
    <SectionContainer>
      <Title variant="h3">Solar Solutions</Title>

      {/* Industrial Solutions Section */}
      <Title variant="h5" id="industrial">
        Industrial Solutions
      </Title>
      <ImageContainer>
        <Slider {...carouselSettings}>
          <Box component="img" src={ind10} alt="Industrial Solution 1"  />
          <Box component="img" src={ind11} alt="Industrial Solution 2"  />
          <Box component="img" src={ind4} alt="Industrial Solution 3"  />
          <Box component="img" src={ind8} alt="Industrial Solution 3"  />
          <Box component="img" src={ind6} alt="Industrial Solution 3"  />
        </Slider>
      </ImageContainer>
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
      <ImageContainer>
        <Slider {...carouselSettings}>
          <Box component="img" src={com1} alt="Industrial Solution 1"  />
          <Box component="img" src={com2} alt="Industrial Solution 2"  />
          <Box component="img" src={com3} alt="Industrial Solution 3"  />
          <Box component="img" src={com4} alt="Industrial Solution 3"  />
        </Slider>
      </ImageContainer>
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
      <ImageContainer>
        <Slider {...carouselSettings}>
          <Box component="img" src={res1} alt="Industrial Solution 1" />
          <Box component="img" src={res2} alt="Industrial Solution 2" />
          <Box component="img" src={res3} alt="Industrial Solution 2" />
          <Box component="img" src={res4} alt="Industrial Solution 2" />
        </Slider>
      </ImageContainer>
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
