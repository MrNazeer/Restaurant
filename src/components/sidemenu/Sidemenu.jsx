import React from "react";
import "./style.scss";
import logo from "../../assets/logo.jpg";

export default function Sidemenu() {
  return (
    <section className="menu">
      <div className="logo-wrap">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu-items-wrap">
        <p>ABOUT US</p>
        <p>OUR MENU</p>
        <p>SPECIAL OFFERS</p>
        <p>GALLERY</p>
        <p>CONTACT US</p>
      </div>
      <div className="menu-info">
        <p className="info1">Book A Table</p>
        <p className="info2">+91-9080706050</p>
        <p className="info3">MON - SUN, 8.00AM - 11.00PM</p>
      </div>
    </section>
  );
}
