import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GenericLinkButton = ({ buttonClass, buttonText, path }) => {
  return (
    <button type="button" className={buttonClass}>
      <Link to={path}>{buttonText}</Link>
    </button>
  );
};

export default GenericLinkButton;
