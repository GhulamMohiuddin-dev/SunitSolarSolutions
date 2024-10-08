import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import SolarPackages from "./components/SolarPackages";
import Accomplishments from "./components/Accomplishments";
import Processes from "./components/Processes";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs"; // Import the About Us page component
import SocialMediaSidebar from "./components/SocialMediaSidebar";
import VideoSection from "./components/NetMeteringSection";
import ContactPage from "./components/ContactPage";
import ContactModal from "./components/ContactModal";
import SolarSolutions from "./components/SolarSolutions";
import NetMeteringSection from "./components/NetMeteringSection";
import CompanyLogos from "./components/CompanyLogos";

// Define the custom theme
const theme = createTheme({
  palette: {
    customRed: {
      main: "#f40306",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif", // Default font for the app
    h1: {
      fontFamily: "'Montserrat', sans-serif", // Font for large headings
      fontWeight: 600,
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif", // Font for medium headings
      fontWeight: 500,
    },
    h3: {
      fontFamily: "'Montserrat', sans-serif", // Font for smaller headings
      fontWeight: 500,
    },
    button: {
      fontFamily: "'Montserrat', sans-serif", // Font for buttons
      fontWeight: 500,
    },
    body1: {
      fontFamily: "'Roboto', sans-serif", // Font for regular body text
      fontWeight: 400,
    },
    body2: {
      fontFamily: "'Roboto', sans-serif", // Font for smaller body text
      fontWeight: 400,
    },
  },
});

const heroData = {
  title: "SUNit: Energizing Tomorrow with Solar Power",
  description:
    "",
  isButton: true,
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <SocialMediaSidebar />
        <NavBar />
        <Routes>
          {/* Define the routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/my-projects" element={<NetMeteringSection />} />
          <Route path="/my-solutions" element={<SolarSolutions />} />


          {/* Add more routes here if needed */}
        </Routes>
        <Footer />
        <ContactModal /> 
      </Router>
    </ThemeProvider>
  );
}

// Create a separate HomePage component for the main content
const HomePage = () => (
  <>
    <HeroSection data={heroData} />
    <Services />
    {/* <SolarPackages /> */}
    <CompanyLogos/>
    <Accomplishments />
    <Processes />
    <CustomerReviews />
  </>
);

export default App;
