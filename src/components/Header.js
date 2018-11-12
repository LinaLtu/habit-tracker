import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <div className={props.headerClass}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
