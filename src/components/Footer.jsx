import React from "react";
import { Box, Typography, Link, IconButton, Grid, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { WhatsApp, Instagram, Facebook, Twitter, Phone, Email } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#666",
        color: "white",
        padding: { xs: "20px 10px", md: "40px 20px" }, // Responsive padding
        borderTop: "5px solid #fcb916",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Company Information */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Sunit Solar Solutions
          </Typography>
          <Typography sx={{ mb: 1 }}>
            123 Solar Avenue,<br />
            Sun City, Solar State, 12345
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px", mb: 1 }}>
            <Phone sx={{ color: "#fcb916" }} />
            <Typography>(123) 456-7890</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Email sx={{ color: "#fcb916" }} />
            <Typography>info@sunit.solars.com</Typography>
          </Box>
        </Grid>

        {/* Navigation Links */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Link href="/about-us" color="inherit" underline="hover" sx={{ "&:hover": { color: "#fcb916" } }}>
              About Us
            </Link>
            <Link href="/my-solutions" color="inherit" underline="hover" sx={{ "&:hover": { color: "#fcb916" } }}>
              Solar Solutions
            </Link>
            <Link href="/my-projects" color="inherit" underline="hover" sx={{ "&:hover": { color: "#fcb916" } }}>
              Net Metering
            </Link>
            <Link href="/contact-us" color="inherit" underline="hover" sx={{ "&:hover": { color: "#fcb916" } }}>
              Contact Us
            </Link>
          </Box>
        </Grid>

        {/* Social Media Icons */}
        <Grid item xs={12} sm={12} md={4} sx={{ textAlign: "center" }}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Button
              variant="contained"
              component={RouterLink}
              to="/contact-us"
              sx={{
                backgroundColor: "#fcb916",
                color: "black",
                fontSize: { xs: "12px", md: "14px" }, // Responsive font size
                fontWeight: "bold",
                transition: "transform 0.2s ease",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              Get a Quote
            </Button>

            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, mt: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
              <IconButton
                color="inherit"
                component="a"
                href="https://wa.me/yourwhatsapplink"
                target="_blank"
                sx={{ color: "white", "&:hover": { color: "#fcb916" } }}
              >
                <WhatsApp />
              </IconButton>
              <IconButton
                color="inherit"
                component="a"
                href="https://instagram.com"
                target="_blank"
                sx={{ color: "white", "&:hover": { color: "#fcb916" } }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                color="inherit"
                component="a"
                href="https://facebook.com"
                target="_blank"
                sx={{ color: "white", "&:hover": { color: "#fcb916" } }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                component="a"
                href="https://twitter.com"
                target="_blank"
                sx={{ color: "white", "&:hover": { color: "#fcb916" } }}
              >
                <Twitter />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", marginTop: "20px", borderTop: "1px solid #444", paddingTop: "10px" }}>
        <Typography variant="body2" sx={{ color: "#777" }}>
          © {new Date().getFullYear()} Sunit Solar Solutions. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
