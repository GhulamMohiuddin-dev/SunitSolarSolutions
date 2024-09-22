import React from "react";
import { Box, Typography, Container, Button, Link } from "@mui/material";
import { styled } from "@mui/system";
import HeroSection from "./HeroSection";

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
  marginBottom: "40px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
  },
}));

const BoldText = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: "#333",
  marginBottom: "20px",
  textAlign: "center",
}));

const Description = styled(Typography)(({ theme }) => ({
  color: "#555",
  marginBottom: "60px",
  lineHeight: "1.6",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
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

const heroData = {
  title: "Net Metering",
  description:
    "Sell your excess solar energy to the national grid and save up to 100% on your electricity bills with Sunit Solar Solutions.",
};

const NetMeteringSection = () => {
  return (
    <>
      <HeroSection data={heroData} />
      <SectionContainer>
        <Title variant="h4">What is Net Metering?</Title>
        <Description>
          Net metering is a government-approved policy that allows individuals
          and businesses to generate electricity through solar energy, use what
          they need, and send surplus power back to the national grid. This
          allows you to offset the energy consumed from the grid during
          non-productive hours, leading to reduced electricity bills or even
          income from the excess energy generated.
          Introduced by NEPRA in 2015, these regulations empower Pakistani
          consumers to export unused energy back to the national grid.
          Businesses and homeowners with a three-phase connection can take
          advantage of net metering, starting from a 3kW system up to 1MW,
          offering a great opportunity for savings and a sustainable future.
        </Description>

        <Title variant="h4">Net Metering with Sunit Solar Solutions</Title>
        <Description>
          At Sunit Solar Solutions, we simplify the net metering process,
          guiding you from installation to the final activation of your solar
          system. We begin by setting up your net-metering-compliant solar
          system, then assist in submitting the application to your local power
          company. Once the inspection is complete, the electricity provider
          issues the necessary NOC, and after a final agreement and license,
          your system is fully operational.
          Sunit Solar Solutions is proud to be licensed by the Alternative
          Energy Development Board (AEDB) under the ARE-VI category, ensuring
          that we adhere to the highest standards in solar energy
          implementation. This makes your journey toward clean energy efficient,
          reliable, and entirely hassle-free.
        </Description>

        <BoldText variant="h4">Steps to Unlock Net Metering Benefits:</BoldText>
        <BoldText>1. Get Your Free Consultation</BoldText>
        <BoldText>2. Design Your Tailored Solar Solution</BoldText>
        <BoldText>3. Start Saving with a Seamless Installation</BoldText>

        <StyledButton component={Link} to="/contact-us">
          Contact Us
        </StyledButton>
      </SectionContainer>
    </>
  );
};

export default NetMeteringSection;
