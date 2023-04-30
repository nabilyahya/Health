import React from "react";

import HomePageBanner from "../components/HomePageBanner";
import HomePageWhyYouChoosedUs from "../components/HomePageWhyYouChoosedUs";
import HomePageServices from "../components/HomePageServices";
import HomePageFounder from "../components/HomePageFounder";
import ContactInfo from "../components/ContactInfo";
export const Home = () => {
  return (
    <div>
      <HomePageBanner />
      <HomePageWhyYouChoosedUs />
      <HomePageServices />
      <HomePageFounder />
      <ContactInfo />
    </div>
  );
};
export default Home;
