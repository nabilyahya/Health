import React from "react";

function HomePageWhyYouChoosedUs() {
  return (
    <div id="why-choose">
      <div className="container">
        <div className="row">
          {/* Tittle */}
          <div className="col-lg-3">
            <div className="tittle">
              <h2>Why Choose Us</h2>
            </div>
          </div>

          {/* Services Row */}
          <div className="col-lg-9">
            <ul className="row">
              {/* Section */}
              <li className="col-sm-4">
                <h6>Medical Counseling</h6>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient
                  montesmus. Nunc finibus sit amet gravida.
                </p>
              </li>
              {/* Section */}
              <li className="col-sm-4">
                <h6>Professional services</h6>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient
                  montesmus. Nunc finibus sit amet gravida.
                </p>
              </li>
              {/* Section */}
              <li className="col-sm-4">
                <h6>24 Hours service</h6>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient
                  montesmus. Nunc finibus sit amet gravida.
                </p>
              </li>
            </ul>
            <ul className="row">
              {/* Section */}
              <li className="col-sm-4">
                <h6>Qualified medical facilities</h6>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient
                  montesmus. Nunc finibus sit amet gravida.
                </p>
              </li>
              {/* Section */}
              <li className="col-sm-4">
                <h6>Top level doctors</h6>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient
                  montesmus. Nunc finibus sit amet gravida.
                </p>
              </li>
              {/* Section */}
              <li className="col-sm-4">
                <h6>Dedicated patient care</h6>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient
                  montesmus. Nunc finibus sit amet gravida.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Image Responsive */}
      <div className="text-center">
        <img
          className="img-responsive"
          src="images/why-choose-img.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default HomePageWhyYouChoosedUs;
