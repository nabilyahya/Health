import React from "react";

const OurservicesServices = () => {
  return (
    <div className="services-about ser-style-2">
      <div className="container">
        {/* Tittle */}
        <div className="tittle tittle-2">
          <h3>Our Services</h3>
          <hr />
          <p>
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum.
          </p>
        </div>
        <ul className="row">
          {/* Slider 2 */}
          <li className="col-sm-4">
            <div className="slide sec-ser">
              <i className="fa fa-stethoscope"></i>
              <h6>Full Stethoscope</h6>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montesmus.
                Nunc finibus sit amet gravida.
              </p>
            </div>
          </li>

          {/* Slider 2 */}
          <li className="col-sm-4">
            <div className="slide sec-ser">
              <i className="fa fa-user-md"></i>
              <h6>Exprienced Doctors</h6>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montesmus.
                Nunc finibus sit amet gravida.
              </p>
            </div>
          </li>

          {/* Slider 1 */}
          <li className="col-sm-4">
            <div className="slide sec-ser">
              <i className="fa fa-tint"></i>
              <h6>Blood Bank</h6>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montesmus.
                Nunc finibus sit amet gravida.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OurservicesServices;
