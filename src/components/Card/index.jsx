import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Card = ({ title, content, imgPath, customClass = "" }) => {
  return (
    <div className={`card ${customClass}`}>
      <h3 className="card_title">{title}</h3>
      <p className="card_content">{content} </p>
      <img className="card_image" src={imgPath} alt="my image" />
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

export default Card;
