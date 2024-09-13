import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Popper,
  Paper,
  MenuItem,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Divider,
  Typography,
} from "@mui/material";
import {
  LinkedIn,
  Instagram,
  Phone,
  Menu,
  ArrowDropDown,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import logo from "../assets/sunitLogo.webp";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // State for drawer
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    aboutUs: false,
    contactUs: false,
  }); // State for dropdowns in mobile

  // Menu Open/Close Handlers for Desktop (hover)
  const handleMenuOpen = (event, menuId) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(menuId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Mobile Dropdown Toggle (onClick)
  const handleMobileDropdownToggle = (menuId) => (event) => {
    event.stopPropagation(); // Prevent the drawer from closing when expanding/collapsing dropdown
    setMobileDropdownOpen((prevState) => ({
      ...prevState,
      [menuId]: !prevState[menuId],
    }));
  };

  // Common Menu Item Styles
  const menuButtonStyle = {
    color: "white",
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    "&:hover": {
      color: "#fcb916",
      transform: "scale(0.95)",
    },
    transition: "transform 0.2s ease",
  };

  // Render Menu Items for Both Desktop and Drawer
  const renderMenuItems = (isDrawer = false) => (
    <>
      {/* About Us - Desktop uses Button, Drawer uses ListItem */}
      <Box
        onMouseEnter={
          !isDrawer ? (event) => handleMenuOpen(event, "aboutUs") : undefined
        }
        onMouseLeave={!isDrawer ? handleMenuClose : undefined}
        sx={{ display: isDrawer ? "block" : "inline-block" }}
      >
        {!isDrawer ? (
          <Button
            color="inherit"
            component={Link}
            to="/about-us"
            sx={menuButtonStyle}
          >
            About Us{" "}
            <ArrowDropDown sx={{ fontSize: "small", marginLeft: "4px" }} />
          </Button>
        ) : (
          <>
            <ListItem button onClick={handleMobileDropdownToggle("aboutUs")}>
              <ListItemText primary="About Us" sx={{ color: "white" }} />
              {mobileDropdownOpen.aboutUs ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse
              in={mobileDropdownOpen.aboutUs}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItem
                  component={Link}
                  to="/about-us#mission"
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary="Our Mission" sx={{ color: "white" }} />
                </ListItem>
                <ListItem component={Link} to="/about-us#team" sx={{ pl: 4 }}>
                  <ListItemText primary="Our Team" sx={{ color: "white" }} />
                </ListItem>
              </List>
            </Collapse>
          </>
        )}

        {!isDrawer && (
          <Popper
            open={openMenu === "aboutUs"}
            anchorEl={anchorEl}
            onClose={handleMenuClose}
            placement="bottom-start"
            sx={{ zIndex: 1000 }}
          >
            <Paper
              onMouseLeave={handleMenuClose}
              sx={{ backgroundColor: "#333", color: "white" }} // Dropdown styling
            >
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/about-us#mission"
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "#fcb916",
                    transform: "scale(0.95)",
                  },
                }}
              >
                Our Mission
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component={Link}
                to="/about-us#team"
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "#fcb916",
                    transform: "scale(0.95)",
                  },
                }}
              >
                Our Team
              </MenuItem>
            </Paper>
          </Popper>
        )}
      </Box>

      {/* Contact Us - Desktop uses Button, Drawer uses ListItem */}
      <Box
        onMouseEnter={
          !isDrawer ? (event) => handleMenuOpen(event, "contactUs") : undefined
        }
        onMouseLeave={!isDrawer ? handleMenuClose : undefined}
        sx={{ display: isDrawer ? "block" : "inline-block" }}
      >
        {!isDrawer ? (
          <Button
            color="inherit"
            component={Link}
            to="/contact-us"
            sx={menuButtonStyle}
          >
            Contact Us{" "}
          </Button>
        ) : (
          <>
            <ListItem button onClick={handleMobileDropdownToggle("contactUs")}>
              <ListItemText primary="Contact Us" sx={{ color: "white" }} />
              {mobileDropdownOpen.contactUs ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse
              in={mobileDropdownOpen.contactUs}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItem sx={{ pl: 4 }}>
                  <ListItemText primary="Email" sx={{ color: "white" }} />
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                  <ListItemText primary="Phone" sx={{ color: "white" }} />
                </ListItem>
              </List>
            </Collapse>
          </>
        )}
      </Box>

      {/* Simple Menu Items (No dropdown) */}
      <Button
        color="inherit"
        sx={menuButtonStyle}
        component={Link}
        to="/my-projects"
      >
        Our Story
      </Button>
      <Button color="inherit" sx={menuButtonStyle} component={Link}
        to="/my-financing">
        Solar Financing
      </Button>
    </>
  );

  return (
    <>
      {/* AppBar for Navbar */}
      <AppBar
        position="sticky"
        sx={{
          zIndex: 10,
          backgroundColor: "#333",
          padding: "10px 20px",
          margin: "0px",
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            component={Link}
            to="/"
          >
            <img src={logo} alt="Premium Solar" style={{ height: "50px" }} />
          </Box>

          {/* Hamburger Icon for Mobile */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              display: { xs: "flex", md: "none" }, // Show only on small screens
            }}
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>

          {/* Drawer for mobile screens */}
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
              sx={{
                width: 250,
                backgroundColor: "#333",
                color: "white",
                height: "100%",
              }}
              role="presentation"
              onClick={(e) => e.stopPropagation()} // Prevent drawer from closing when expanding items
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {/* Drawer Menu Items */}
                {renderMenuItems(true)}
              </List>
              <Divider sx={{ borderColor: "#fcb916" }} />
              {/* Social Media Icons in Drawer */}
              <Box sx={{ padding: "10px 0", textAlign: "center" }}>
                <IconButton color="inherit">
                  <LinkedIn sx={{ color: "white" }} />
                </IconButton>
                <IconButton color="inherit">
                  <Instagram sx={{ color: "white" }} />
                </IconButton>
              </Box>
            </Box>
          </Drawer>

          {/* Horizontal Menu for Desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" }, // Hide on small screens
              gap: "20px",
              alignItems: "center",
            }}
          >
            {renderMenuItems()}
          </Box>

          {/* Right Side - Contact Button and Social Media Icons */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" }, // Hide on small screens
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Phone sx={{ color: "inherit" }} />
            <Typography
              variant="body1"
              sx={{
                color: "inherit",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              +1 234 567 890
            </Typography>
            <Button
              variant="contained"
              component={Link}
              to="/contact-us"
              sx={{
                backgroundColor: "#fcb916",
                color: "black",
                fontSize: "14px",
                fontWeight: "bold",
                transition: "transform 0.2s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                ["@media (max-width:600px)"]: {
                  fontSize: "12px", // Smaller button text for mobile
                },
              }}
            >
              Get a Quote
            </Button>

            {/* Social Media Icons */}
            <IconButton color="inherit">
              <LinkedIn sx={{ color: "white" }} />
            </IconButton>
            <IconButton color="inherit">
              <Instagram sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
