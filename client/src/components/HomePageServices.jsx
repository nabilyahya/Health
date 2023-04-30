import React from "react";

export const HomePageServices = () => {
  return (
    <section id="services">
      <div className="container-fluid">
        <ul className="row">
          <li className="col-md-3">
            {" "}
            <i className="fa fa-heartbeat"></i>
            <h5>Heart Rate</h5>
            <p>
              Duis autem vel eum iriure dolor in hendr erit in vulpt feugiat
              nulla facilisis utate velit esse molestie consequat
            </p>
          </li>
          <li className="col-md-3">
            {" "}
            <i className="fa fa-stethoscope"></i>
            <h5>Medical Counseling</h5>
            <p>
              Duis autem vel eum iriure dolor in hendr erit in vulpt feugiat
              nulla facilisis utate velit esse molestie consequat
            </p>
          </li>
          <li className="col-md-3">
            {" "}
            <i className="fa fa-user-md"></i>
            <h5>Qualified Doctors</h5>
            <p>
              Duis autem vel eum iriure dolor in hendr erit in vulpt feugiat
              nulla facilisis utate velit esse molestie consequat
            </p>
          </li>
          <li className="col-md-3">
            {" "}
            <i className="fa fa-ambulance"></i>
            <h5>Emergency Services</h5>
            <p>
              Duis autem vel eum iriure dolor in hendr erit in vulpt feugiat
              nulla facilisis utate velit esse molestie consequat
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default HomePageServices;
