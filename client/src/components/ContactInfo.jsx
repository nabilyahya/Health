import React from "react";

function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="container">
        <ul className="row">
          <li className="col-md-3">
            <i className="ion-ios-location-outline"></i>
            <h5>Address</h5>
            <p>1800 Abbot Kinney Blvd. Unit D & E Venice, CA 90291</p>
          </li>
          <li className="col-md-3">
            <i className="ion-iphone"></i>
            <h5>Hotline</h5>
            <p>+00-0122-123-0089</p>
          </li>
          <li className="col-md-3">
            <i className="ion-ios-email-outline"></i>
            <h5>Email contact</h5>
            <p>medikal@gmail.com</p>
            <p>contact@medikalclinic.com</p>
          </li>
          <li className="col-md-3">
            <i className="ion-earth"></i>
            <h5>Website</h5>
            <p>www.medikalclinic.com</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ContactInfo;
