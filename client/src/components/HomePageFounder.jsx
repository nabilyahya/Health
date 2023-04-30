import React from "react";

function HomePageFounder() {
  return (
    <section id="founder-sliders">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="founder-slide">
              {/* Slider 1 */}
              <div className="slide">
                <img
                  className="img-responsive"
                  src="../images/founder-1.jpg"
                  alt=""
                />
                <h4>Dr. Forest Aalderink</h4>
                <p>Clinic president</p>
              </div>
              {/* Slider 2 */}
              <div className="slide">
                <img
                  className="img-responsive"
                  src="../images/founder-2.jpg"
                  alt=""
                />
                <h4>Dr. Bryce Butler</h4>
                <p>Clinic president</p>
              </div>
              {/* Slider 3 */}
              <div className="slide">
                <img
                  className="img-responsive"
                  src="../images/founder-1.jpg"
                  alt=""
                />
                <h4>Dr. Bryce Butler</h4>
                <p>Clinic president</p>
              </div>
              {/* Slider 4 */}
              <div className="slide">
                <img
                  className="img-responsive"
                  src="../images/founder-2.jpg"
                  alt=""
                />
                <h4>Dr. Bryce Butler</h4>
                <p>Clinic president</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePageFounder;
