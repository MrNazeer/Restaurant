import React from "react";
import hero from "../../assets/sec1.jpg";
import "./style.scss";

export default function Section1() {
  return (
    <section className="sec1">
      <div className="sec1-cont">
        <div className="sec1-text-wrap">
          <h1 className="title">YOU DON'T NEED A SILVER FORK TO EAT GOOD FOOD.</h1>
          <div className="btn-wrap">
            <p className="btn btn1">See Our Menu</p>
            <p className="btn btn2">Special Offers</p>
          </div>
        </div>
        <div className="sec1-img">
          <img src={hero} alt="bg-img" />
        </div>
      </div>
    </section>
  );
}
