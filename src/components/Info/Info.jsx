import React, { Component } from "react";
import InfoItem from "../InfoItem/InfoItem";
import Infos from "../../constants/Infos.js";
import "./Info.scss";

const Info = () => {
  return (
    <ul className="info">
      {Infos.map((item) => {
        return (
          <li className="info__list-item" key={item.id}>
            <InfoItem item={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default Info;
