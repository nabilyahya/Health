import React from "react";

export const HomePageBanner = () => {
  return (
    <div class="content">
      <div id="banner" className="full-screen">
        <div className="main-bnr">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 no-padding">
                <div className="main-bnr-text">
                  <h5>Hello, We are Medikal!!</h5>
                  <h1>We Care About Your Health</h1>
                  <p>
                    Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum. Mirum est notare quam
                    littera gothica, quam nunc putamus ui sequitur mutationem
                    consuetudium lectorum. parum claram
                  </p>
                  <a href="#." className="btn btn-1">
                    Make an appointment
                  </a>
                </div>
              </div>
              <div
                className="col-md-6 no-padding main-bnr-bg"
                data-stellar-background-ratio="0.5"
              ></div>
            </div>
          </div>
          <div className="go-down scroll">
            <a href="#why-choose">
              <i className="ion-ios-arrow-down"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePageBanner;
