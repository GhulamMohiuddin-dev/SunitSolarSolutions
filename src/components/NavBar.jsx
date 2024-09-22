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
  Instagram,
  WhatsApp,
  Facebook,
  Twitter,
  LinkedIn,
  Phone,
  Menu,
  ArrowDropDown,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import logo from "../../public/assets/SunitSolarLogo-02.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    aboutUs: false,
    contactUs: false,
  });

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

  const handleMobileDropdownToggle = (menuId) => (event) => {
    event.stopPropagation();
    setMobileDropdownOpen((prevState) => ({
      ...prevState,
      [menuId]: !prevState[menuId],
    }));
  };

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

  const menuItems = [
    {
      id: "aboutUs",
      label: "About Us",
      link: "/about-us",
      subItems: [
        { label: "Our Mission", link: "/about-us#mission" },
        { label: "Why Choose Us", link: "/about-us#team" },
      ],
    },
    {
      id: "solarSolutions",
      label: "Solar Solutions",
      link: "/my-solutions", // Ensure this is the correct path
      subItems: [
        { label: "Industrial Solutions", link: "/my-solutions#industrial" },
        { label: "Commercial Solutions", link: "/my-solutions#commercial" },
        { label: "Residential Solutions", link: "/my-solutions#residential" },
      ],
    },
    { id: "contactUs", label: "Contact Us", link: "/contact-us" },
    { id: "netMetering", label: "Net Metering", link: "/my-projects" },
  ];

  const renderMenuItem = (item, isDrawer) => (
    <Box
      key={item.id}
      onMouseEnter={
        !isDrawer ? (event) => handleMenuOpen(event, item.id) : undefined
      }
      onMouseLeave={!isDrawer ? handleMenuClose : undefined}
      sx={{ display: isDrawer ? "block" : "inline-block" }}
    >
      <Button
        color="inherit"
        component={Link}
        to={item.link}
        sx={menuButtonStyle}
        onClick={
          isDrawer && item.subItems
            ? handleMobileDropdownToggle(item.id)
            : undefined
        }
      >
        {item.label}
        {item.subItems && !isDrawer && (
          <ArrowDropDown sx={{ fontSize: "small", marginLeft: "4px" }} />
        )}
      </Button>

      {isDrawer && item.subItems && (
        <Collapse in={mobileDropdownOpen[item.id]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.subItems.map((subItem, index) => (
              <ListItem
                key={index}
                component={Link}
                to={subItem.link}
                sx={{ pl: 4 }}
              >
                <ListItemText primary={subItem.label} sx={{ color: "white" }} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}

      {!isDrawer && item.subItems && (
        <Popper
          open={openMenu === item.id}
          anchorEl={anchorEl}
          onClose={handleMenuClose}
          placement="bottom-start"
          sx={{ zIndex: 1000 }}
        >
          <Paper
            onMouseLeave={handleMenuClose}
            sx={{ backgroundColor: "#333", color: "white" }}
          >
            {item.subItems.map((subItem, index) => (
              <MenuItem
                key={index}
                onClick={handleMenuClose}
                component={Link}
                to={subItem.link}
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "#fcb916",
                    transform: "scale(0.95)",
                  },
                }}
              >
                {subItem.label}
              </MenuItem>
            ))}
          </Paper>
        </Popper>
      )}
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          zIndex: 10,
          backgroundColor: "#666",
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
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            component={Link}
            to="/"
          >
            <img src={logo} alt="Premium Solar" style={{ height: "50px" }} />
          </Box>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>

          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
              sx={{
                width: 250,
                backgroundColor: "#333",
                color: "white",
                height: "100%",
              }}
              role="presentation"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={toggleDrawer(false)}
            >
              <List>{menuItems.map((item) => renderMenuItem(item, true))}</List>
              <Divider sx={{ borderColor: "#fcb916" }} />
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

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "20px",
              alignItems: "center",
            }}
          >
            {menuItems.map((item) => renderMenuItem(item, false))}
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "10px",
            }}
          >
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
                "&:hover": { transform: "scale(1.05)" },
                ["@media (max-width:600px)"]: { fontSize: "12px" },
              }}
            >
              Get a Quote
            </Button>

            {/* WhatsApp */}
            <IconButton
              color="inherit"
              component="a"
              href="https://wa.me/yourwhatsapplink"
              target="_blank"
            >
              <WhatsApp sx={{ color: "white" }} />
            </IconButton>

            {/* Instagram */}
            <IconButton
              color="inherit"
              component="a"
              href="https://www.instagram.com"
              target="_blank"
            >
              <Instagram sx={{ color: "white" }} />
            </IconButton>

            {/* Facebook */}
            <IconButton
              color="inherit"
              component="a"
              href="https://www.facebook.com"
              target="_blank"
            >
              <Facebook sx={{ color: "white" }} />
            </IconButton>

            {/* Twitter */}
            <IconButton
              color="inherit"
              component="a"
              href="https://www.twitter.com"
              target="_blank"
            >
              <Twitter sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
