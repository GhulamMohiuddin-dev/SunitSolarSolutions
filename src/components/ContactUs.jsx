import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for Toastify

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1);
  }
`;

const FormContainer = styled(Box)(({ theme, isTrue }) => ({
  padding: isTrue ? "60px 20px" : "0px", // Conditional padding based on isTrue
  backgroundColor: "#f8f9fa",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ["@media (max-width:600px)"]: {
    padding: "30px 10px", // Less padding for mobile screens
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "600px",
  width: "100%",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  borderRadius: "15px",
  ["@media (max-width:600px)"]: {
    maxWidth: "100%", // Full width for small screens
  },
}));

const StyledButton = styled(Button)(({ theme, isAnimated }) => ({
    backgroundColor: "#fcb916",
    color: "#fff",
    padding: "10px 20px",
    fontWeight: "bold",
    fontSize: "16px",
    marginTop: "20px",
    transition: "background-color 0.3s, transform 0.3s",
    animation: isAnimated ? `${pulse} 2s infinite` : "none", // Apply pulse animation based on isAnimated
    "&:hover": {
      backgroundColor: "#d1a014",
      transform: "scale(1.05)",
    },
    ["@media (max-width:600px)"]: {
      padding: "8px 15px",
      fontSize: "14px", // Smaller font size for mobile
    },
  }));

const ContactUs = ({ isTrue }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    city: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{11}$/.test(formData.phone)) {
      newErrors.phone = "Phone number should be 11 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill out the form correctly.");
      return;
    }

    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdbipYbiZxE77OcgImyWWxfUCHCktw_2LxQ7POEM4n9B5kVbw/formResponse";

    const formBody = new URLSearchParams();
    formBody.append("entry.496938758", formData.firstName);
    formBody.append("entry.1848396228", formData.lastName);
    formBody.append("entry.1934411141", formData.city);
    formBody.append("entry.1287449100", formData.email);
    formBody.append("entry.484797899", formData.phone);

    fetch(googleFormUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody.toString(),
    })
      .then(() => {
        toast.success("Your response has been submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          city: "",
          email: "",
          phone: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        toast.error("There was an error submitting your response.");
      });
  };

  return (
    <>
      <FormContainer isTrue={isTrue}>
        <StyledCard>
          <CardContent>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#333",
                mb: 2,
                textAlign: "center",
              }}
            >
              {isTrue ? "Contact Us" : "Want Zero Bills?"}
            </Typography>
            <Typography sx={{ color: "#777", mb: 4, textAlign: "center" }}>
              {isTrue
                ? "Kindly Fill This Form. One Of Our Representatives Will Contact You."
                : "Get in touch Now!"}
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    sx={{
                      backgroundColor: "#fff",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    sx={{
                      backgroundColor: "#fff",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    error={!!errors.city}
                    helperText={errors.city}
                    sx={{
                      backgroundColor: "#fff",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    error={!!errors.email}
                    helperText={errors.email}
                    sx={{
                      backgroundColor: "#fff",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    error={!!errors.phone}
                    helperText={errors.phone}
                    sx={{
                      backgroundColor: "#fff",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Box textAlign="center">
                <StyledButton type="submit" isAnimated={!isTrue}>Submit</StyledButton>
              </Box>
            </form>
          </CardContent>
        </StyledCard>
      </FormContainer>
      {/* Toast Container for showing notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </>
  );
};

export default ContactUs;
