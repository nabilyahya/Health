import React from "react";

const OurServicesSubbanner = () => {
  return (
    <section className="sub-banner" data-stellar-background-ratio="0.5">
      <div className="overlay">
        <div className="container">
          <h3>SERVICES US</h3>
          <p>Meet our team of highly skilled professionals</p>

          {/* Breadcrumbs */}
          <ol className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="active">SERVICES</li>
          </ol>
        </div>
      </div>
    </section>
  );
};
export default OurServicesSubbanner;
