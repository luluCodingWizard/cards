import React from "react";
import "./header.css";

const Index = ({ text, isBold }) => {
  return <h1 className={isBold ? "" : "isLight"}>{text}</h1>;
};

export default Index;
