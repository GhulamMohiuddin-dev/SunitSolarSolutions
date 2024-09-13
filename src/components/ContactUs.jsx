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
import { styled } from "@mui/system";

const FormContainer = styled(Box)(({ theme, isTrue }) => ({
    padding: isTrue ? "60px 20px" : "0px", // Conditional padding based on isTrue
    backgroundColor: "#f8f9fa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "600px",
  width: "100%",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  borderRadius: "15px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#fcb916",
  color: "#fff",
  padding: "10px 20px",
  fontWeight: "bold",
  fontSize: "16px",
  marginTop: "20px",
  transition: "background-color 0.3s, transform 0.3s",
  "&:hover": {
    backgroundColor: "#d1a014",
    transform: "scale(1.05)",
  },
  ["@media (max-width:600px)"]: {
    padding: "8px 15px",
    fontSize: "14px",
  },
}));

const ContactUs = ({isTrue}) => {
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
    setErrors({ ...errors, [name]: "" }); // Reset the error message on change
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
      newErrors.phone = "Phone number should be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Replace with your Google Form's action URL
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdbipYbiZxE77OcgImyWWxfUCHCktw_2LxQ7POEM4n9B5kVbw/formResponse";

    // Replace with your form's input field names
    const formBody = new URLSearchParams();
    formBody.append("entry.496938758", formData.firstName); // Replace entry.1234567890 with your field's entry ID
    formBody.append("entry.1848396228", formData.lastName); // Replace entry.2345678901 with your field's entry ID
    formBody.append("entry.1934411141", formData.city); // Replace entry.3456789012 with your field's entry ID
    formBody.append("entry.1287449100", formData.email); // Replace entry.4567890123 with your field's entry ID
    formBody.append("entry.484797899", formData.phone); // Replace entry.5678901234 with your field's entry ID

    fetch(googleFormUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody.toString(),
    })
      .then(() => {
        alert("Your response has been submitted successfully!");
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
        alert("There was an error submitting your response. Please try again.");
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
              {isTrue ? "Contact Us" : "Not Satisfied Yet?"}
            </Typography>
            <Typography sx={{ color: "#777", mb: 4, textAlign: "center" }}>
            {isTrue ? "Kindly Fill This Form. One Of Our Representatives Will Contact You." : "Save Utility Bills with us. Get in touch!"}
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
                <StyledButton type="submit">Submit</StyledButton>
              </Box>
            </form>
          </CardContent>
        </StyledCard>
      </FormContainer>
    </>
  );
};

export default ContactUs;
