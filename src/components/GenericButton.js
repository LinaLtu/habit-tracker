import React, { Component } from "react";
import PropTypes from "prop-types";

const GenericButton = props => {
  return (
    <button type="button" className={props.buttonClass}>
      {props.buttonText}
    </button>
  );
};

export default GenericButton;
