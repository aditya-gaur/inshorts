import React from "react";
import { Icon } from "antd";

export default ({ type, text, onClick }) => (
  <span className="icons__wrapper">
    <Icon onClick={onClick.bind(this, text)} className="icons" type={type} />{" "}
    {text}
  </span>
);
