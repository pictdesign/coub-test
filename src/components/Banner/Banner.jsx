import React, { Component } from "react";
import image from "../../assets/images/banner.svg";
import "./Banner.scss";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__content">
        <h1 className="banner__title">TEXT_TEXT_TEXT</h1>
        <h2 className="banner__subtitle">TEXT_TEXT_TEXT_TEXT</h2>
        <img className="banner__image" src={image} />
        <button className="banner__button" type="button">
          TEXT_TEXT_TEXT
        </button>
        
      </div>
    </section>
  );
};

export default Banner;
