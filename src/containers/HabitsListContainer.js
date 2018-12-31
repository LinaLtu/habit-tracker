import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HabitsListComponent from '../components/HabitsListComponent';

class HabitsListContaner extends Component {
  render() {

    const { items } = this.props;

    return <HabitsListComponent habitsList={items}/>;
  }
}

const mapStateToProps = (store) => {

  return {
    items: store.items
  };
};

HabitsListContaner.propTypes = {
  items: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(HabitsListContaner);
