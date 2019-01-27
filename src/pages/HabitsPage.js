import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import HabitsHeaderComponent from '../components/HabitsHeaderComponent';
import HabitsListContaner from '../containers/HabitsListContainer';

const CSS_NS = 'habits-page';

const HabitsPage = (props) => {

  console.log('From HabitsPage', props.isModalOpen);

  return (
    <div className={cx({[`${CSS_NS}__background-overlay`]: props.isModalOpen})}>
      <HabitsHeaderComponent title={'Habits'} />
      <HabitsListContaner />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isModalOpen: state.isModalOpen
  }
}

export default connect(mapStateToProps)(HabitsPage);
