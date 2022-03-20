import React from "react";
import "./styles.css";

export default function Info() {
  return (
    <div className="row">
      <div className="col-12 py-3 border-top">
        <h1>
          Route 66 Restaurant
          <span className="sr-only">Online Ordering Menu</span>
        </h1>
        <div className="d-block">
          <div className="d-inline-block align-top pr-1">
            <i className="fas fa-directions fa-fw"></i>
          </div>
          <div className="d-inline-block">
            <a
              href="https://maps.google.com/?daddr=40.0521558,-76.3101419"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              45 W Liberty St Apt 1<br />
              Lancaster, PA 17603
            </a>
          </div>
        </div>
        <div className="d-block">
          <div className="d-inline-block align-top pr-1">
            <i className="fas fa-phone fa-fw"></i>
          </div>
          <div className="d-inline-block">
            <a href="tel:(717) 394-0010" className="text-dark">
              (717) 394-0010
            </a>
          </div>
        </div>
        <div id="hours-today" className="d-block">
          <div className="d-inline-block align-top pr-1">
            <i className="far fa-clock fa-fw"></i>
          </div>
          <div className="d-inline-block">
            <a href="#hours" className="text-dark">
              Noon - 6:00 PM
            </a>
          </div>
        </div>
        <div id="home-section-votes" className="d-block">
          <div className="d-inline-block align-top pr-1">
            <i className="far fa-thumbs-up fa-fw"></i>
          </div>
          <div className="d-inline-block">99% of 794 customers recommended</div>
        </div>
      </div>
    </div>
  );
}
