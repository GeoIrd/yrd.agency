import React from "react";
import "./Btn.css";

const Btn = ({ variant, children }) => {
  return <button className={`btn ${variant}`}>{children}</button>;
};

export default Btn;
