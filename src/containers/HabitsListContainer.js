import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import HabitsListComponent from "../components/HabitsListComponent";

class HabitsListContaner extends Component {
  render() {
    const { items } = this.props;

    return <HabitsListComponent habitsList={items} />;
  }
}

const initialState = {
  items: []
};

const mapStateToProps = (state = initialState) => {
  return {
    items: state.items
  };
};

HabitsListContaner.propTypes = {
  items: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(HabitsListContaner);
