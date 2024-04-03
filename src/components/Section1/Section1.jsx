import React from "react";
import hero from "../../assets/sec1.jpg";
import "./style.scss";

export default function Section1() {
  return (
    <section className="sec1">
      <div className="sec1-text-wrap">
        <h2 className="">YOU DON'T NEED A SILVER FORK TO EAT GOOD FOOD.</h2>
        <p className="btn1">See Our Menu</p>
        <p className="btn1">Special Offers</p>
      </div>
      <div className="sec1-img">
        <img src={hero} alt="bg-img" />
      </div>
    </section>
  );
}
