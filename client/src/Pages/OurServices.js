import React from "react";
import OurServicesSubbanner from "../components/OurServicesSubbanner";
import OurservicesServices from "../components/OurservicesServices";
import ContactInfo from "../components/ContactInfo";
export const OurServices = () => {
  return (
    <div>
      <div class="content fix-nav-space">
        <OurServicesSubbanner />
        <OurservicesServices />
        <ContactInfo />
      </div>
    </div>
  );
};
export default OurServices;
