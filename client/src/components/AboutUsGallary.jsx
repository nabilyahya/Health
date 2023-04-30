import React from "react";

const AboutUsGallary = () => {
  return (
    <section className="gallery">
      <div id="container">
        <ul>
          {/* Item 1 */}
          <li className="col-sm-6 item-mas">
            {/* Image */}
            <img
              className="img-responsive"
              src="../images/gallery-img-1.jpg"
              alt=""
            />
            {/* Image Hove */}
            <div className="over-gallery">
              {/* Hove Details */}
              <div className="details">
                <h4>Emergency department</h4>
                <p>Nam liber tempor cum soluta</p>
              </div>
            </div>
          </li>

          {/* Item 2 */}
          <li className="col-sm-3 item-mas">
            <img
              className="img-responsive"
              src="../images/gallery-img-2.jpg"
              alt=""
            />
            {/* Image Hove */}
            <div className="over-gallery">
              {/* Hove Details */}
              <div className="details">
                <h4>Emergency department</h4>
                <p>Nam liber tempor cum soluta</p>
              </div>
            </div>
          </li>

          {/* Item 3 */}
          <li className="col-sm-3 item-mas">
            <img
              className="img-responsive"
              src="../images/gallery-img-3.jpg"
              alt=""
            />
            {/* Image Hove */}
            <div className="over-gallery">
              {/* Hove Details */}
              <div className="details">
                <h4>Emergency department</h4>
                <p>Nam liber tempor cum soluta</p>
              </div>
            </div>
          </li>

          {/* Item 4 */}
          <li className="col-sm-3 item-mas">
            <img
              className="img-responsive"
              src="../images/gallery-img-4.jpg"
              alt=""
            />
            {/* Image Hove */}
            <div className="over-gallery">
              {/* Hove Details */}
              <div className="details">
                <h4>Emergency department</h4>
                <p>Nam liber tempor cum soluta</p>
              </div>
            </div>
          </li>

          {/* Item 5 */}
          <li className="col-sm-3 item-mas">
            <img
              className="img-responsive"
              src="../images/gallery-img-5.jpg"
              alt=""
            />
            {/* Image Hove */}
            <div className="over-gallery">
              {/* Hove Details */}
              <div className="details">
                <h4>Emergency department</h4>
                <p>Nam liber tempor cum soluta</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUsGallary;
