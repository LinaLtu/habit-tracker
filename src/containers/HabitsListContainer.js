import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import HabitsListComponent from "../components/HabitsListComponent";

class HabitsListContaner extends Component {
  render() {
    const { items } = this.props;

    return <HabitsListComponent habitsList={items} />;
  }
}

// TODO Remove when implementing Redux
const initialState = {
  items: [
    {
      id: uuid(),
      title: "Read books",
      planning: {
        1: false,
        2: true,
        3: true,
        4: false,
        5: true,
        6: true,
        7: false
      },
      progress: {
        "2018-12-02": true,
        "2018-12-08": true
      }
    }
  ]
};

const mapStateToProps = () => {
  return {
    items: initialState.items
  };
};

HabitsListContaner.propTypes = {
  items: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(HabitsListContaner);
