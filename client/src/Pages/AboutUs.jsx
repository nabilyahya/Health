import React from "react";
import AboutUsSections from "../components/AboutUsSections";
import AboutUsGallary from "../components/AboutUsGallary";
import AboutUsOurService from "../components/AboutUsOurService";
import ContactInfo from "../components/ContactInfo";
export const AboutUs = () => {
  return (
    <div class="content fix-nav-space">
      <AboutUsSections />
      <AboutUsGallary />
      <AboutUsOurService />
      <ContactInfo />
    </div>
  );
};
export default AboutUs;
