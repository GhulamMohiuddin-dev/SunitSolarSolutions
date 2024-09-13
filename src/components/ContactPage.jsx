import React from "react";
import HeroSection from "./HeroSection";
import ContactUs from "./ContactUs";

const ContactPage = () => {
  const heroData = {
    title: "Keep In Touch",
    description:
      "We would love to hear from you! Please fill out the form below and we'll get in touch with you shortly.",
  };

  return (
    <>
      <HeroSection data={heroData} />
      <ContactUs isTrue={true} />
    </>
  );
};

export default ContactPage;
