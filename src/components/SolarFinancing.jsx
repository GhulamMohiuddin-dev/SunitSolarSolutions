import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

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

const Description = styled(Typography)(({ theme }) => ({
  color: "#555",
  marginBottom: "30px",
  lineHeight: "1.6",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const EligibilityList = styled(Box)(({ theme }) => ({
  textAlign: "left",
  margin: "auto",
  maxWidth: "600px",
  paddingLeft: "20px",
  paddingRight: "20px",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
}));

const EligibilityItem = styled(Typography)(({ theme }) => ({
  color: "#555",
  marginBottom: "10px",
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

const SolarFinancing = () => {
  return (
    <SectionContainer>
      <Title variant="h4">Solar Financing</Title>
      <Description>
        Premium Solar Solution is in collaboration with different banks to
        provide solar financing at a subsidized markup of 6% per annum as per
        the State Bank of Pakistan (SBP) Financing Scheme for Renewable Energy.
        The financing tenure is flexible between 3 and 5 years.
        <br />
        <br />
        Live casinos are interested not only in reducing their electricity bills
        but also in minimizing their impact on the environment through solar
        energy. In addition to saving money, casinos promote a greener image,
        which is likely to attract more customers. Although most casinos do not
        use soybean electricity, they are aware of the future needs and benefits
        of renewables.
      </Description>
      <Title variant="h5">Eligibility Criteria</Title>
      <EligibilityList>
        <EligibilityItem>
          - Applicant holding CNIC with a maximum age of 60 years on expiry of
          finance facility
        </EligibilityItem>
        <EligibilityItem>- Must be the owner of the residence</EligibilityItem>
        <EligibilityItem>
          - Must be residing within 30 km radius of the financing branch
        </EligibilityItem>
        <EligibilityItem>
          - Must have a clean e-CIB (no defaults)
        </EligibilityItem>
        <EligibilityItem>
          - Utility bills should be in the name of the applicant
        </EligibilityItem>
      </EligibilityList>
      <StyledButton component={Link} to="/contact-us">
        Contact Us
      </StyledButton>
    </SectionContainer>
  );
};

export default SolarFinancing;
