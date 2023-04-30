import React from "react";

const AboutUsOurService = () => {
  return (
    <div id="services" className="services-about">
      <div className="container">
        <div className="row">
          {/* Tittle */}
          <div className="col-lg-4 padding-r-80">
            <div className="tittle">
              <h2>Our Services</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              ut laoreet.
            </p>
            <br />
            <p>
              Claritas est etiam processus dynamicus, lectorum. Mirum est notare
              quam est notare quam littera eodem modo.
            </p>
          </div>

          {/* Founder sliders */}
          <div className="col-lg-8">
            <div className="services-slide">
              {/* Slider 1 */}
              <div className="slide sec-ser">
                <i className="fa fa-tint"></i>
                <h6>Blood Bank</h6>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient
                  montesmus. Nunc finibus sit amet gravida.
                </p>
              </div>

              {/* Slider 2 */}
              <div className="slide sec-ser">
                <i className="fa fa-stethoscope"></i>
                <h6>Full Stethoscope</h6>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient
                  montesmus. Nunc finibus sit amet gravida.
                </p>
              </div>

              {/* Slider 3 */}
              <div className="slide sec-ser">
                <i className="fa fa-wheelchair"></i>
                <h6>For Disable</h6>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient
                  montesmus. Nunc finibus sit amet gravida.
                </p>
              </div>

              {/* Slider 4 */}
              <div className="slide sec-ser">
                <i className="fa fa-heartbeat"></i>
                <h6>Heart Specialist</h6>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient
                  montesmus. Nunc finibus sit amet gravida.
                </p>
              </div>

              {/* Slider 5 */}
              <div className="slide sec-ser">
                <i className="fa fa-user-md"></i>
                <h6>Experienced Doctors</h6>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient
                  montesmus. Nunc finibus sit amet gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsOurService;
