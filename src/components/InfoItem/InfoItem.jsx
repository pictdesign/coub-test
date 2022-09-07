import React from "react";
import { NavLink } from "react-router-dom";
import "./InfoItem.scss";

const InfoItem = ({ item }) => {
  return (
    <div className="info-item">
      <div className="info-item__container">
        <div className="info-item__header">
          <div
            className="info-item__icon"
            style={{ backgroundImage: `url(${item.icon})` }}
          />
          <h2 className="info-item__title">{item.title}</h2>
        </div>
        <p className="info-item__text">{item.text}</p>
        <NavLink to={item.link} className="info-item__link">
          {item.linkTitle}
          <div className="info-item__link-icon" />
        </NavLink>
      </div>
      <div
        className="info-item__icon info-item__icon_active"
        style={{ backgroundImage: `url(${item.icon})` }}
      />
    </div>
  );
};

export default InfoItem;
