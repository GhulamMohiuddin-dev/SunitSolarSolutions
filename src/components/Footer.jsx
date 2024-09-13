import React from "react";
import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import { LinkedIn, Instagram, Email, Phone } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333",
        color: "white",
        padding: "40px 20px",
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
            <Typography>info@suntisolars.com</Typography>
          </Box>
        </Grid>

        {/* Navigation Links */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Link href="#" color="inherit" underline="hover" sx={{ "&:hover": { color: "#fcb916" } }}>
              Our Projects
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ "&:hover": { color: "#fcb916" } }}>
              Blogs
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ "&:hover": { color: "#fcb916" } }}>
              Solar Financing
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ "&:hover": { color: "#fcb916" } }}>
              About Us
            </Link>
            <Link href="#" color="inherit" underline="hover" sx={{ "&:hover": { color: "#fcb916" } }}>
              Contact Us
            </Link>
          </Box>
        </Grid>

        {/* Social Media Icons */}
        <Grid item xs={12} sm={12} md={4} sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "15px" }}>
            <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "white", "&:hover": { color: "#fcb916" } }}>
              <LinkedIn />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" sx={{ color: "white", "&:hover": { color: "#fcb916" } }}>
              <Instagram />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", marginTop: "20px", borderTop: "1px solid #444", paddingTop: "10px" }}>
        <Typography variant="body2" sx={{ color: "#777" }}>
          © {new Date().getFullYear()} Sunit Solars Solution. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
