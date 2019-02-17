import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PortalWithState } from 'react-portal';
import MaterialIcon from 'material-icons-react';

const CSS_NS = 'modal';


class EditHabitModalComponent extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      planning: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
      }
    };

    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
    this.getInitialData = this.getInitialData.bind(this);
  }

  componentDidMount() {
      console.log("Hello, I'm mounted");



  }

  getInitialData(e, openPortal) {
    const { getItem, habitItem} = this.props;
    let selectedItem = getItem(habitItem);
    this.setState({
      title: selectedItem.payload.title,
      planning: selectedItem.payload.planning
    });
    openPortal(e);
      console.log('From modal', this.state)
  }

  onChangeText(e) {
      this.setState({ [e.target.name]: e.target.value });

    // const { getItem, habitItem} = this.props;
    // let selectedItem = getItem(habitItem);
    // this.setState({
    //   title: selectedItem.payload.title,
    //   planning: selectedItem.payload.planning
    // });
  }

  onClickWeekDay(weekDay) {
   const planning = { ...this.state.planning }
   planning[weekDay] = !planning[weekDay]

   const icons = { ...this.state.icons }
   icons[weekDay] = planning[weekDay] ? 'check_circle_outline' : 'check_circle';

   this.setState({ planning, icons });

   // icon = this.generateMaterialIcon();
   //
   // return icon;

   // Change input checkbox with two icons (CHECKED or NOT CHECKED)
   // change the <label> with a <div> and delete the two lines below
   // const ref = `ref_${weekDay}`;
   // this[ref].current.checked = !this[ref].current.checked;
 }

  onChangeCheckBox(e) {


  }

  handleSaveClick(e) {
    e.preventDefault();
    //import action
    //get info needed from local state to use as arguments when calling
    //call action/
    //state.reset();
    //closeModal
    console.log('Saved')
  }

  handleDeleteClick(e, closePortal) {
    const { deleteItem, habitItem } = this.props;
    e.preventDefault();
    deleteItem(habitItem);
    closePortal(e);
  }

  render() {
    return (
      <PortalWithState closeOnOutsideClick closeOnEsc>
        {({ openPortal, closePortal, portal }) => (
          <React.Fragment>
            <button onClick={(e) => (this.getInitialData(e, openPortal))}>
              +
            </button>
            {portal(
              <form className={`${CSS_NS}__main`}>
                <div className={`${CSS_NS}__title`}><label htmlFor='title'>Edit a Habit:</label>

                <input name='title' onChange={this.onChangeText} value={this.state.title}/></div>

                 <ul className={`${CSS_NS}__day-items`}>
                    <li>
                        <div onClick={() => this.onClickWeekDay(1)}>
                        {this.state.planning[1] && <MaterialIcon icon={ 'check_circle' } color={ 'green' } size={20} />}
                        {!this.state.planning[1] && <MaterialIcon icon={ 'check_circle_outline' } color={ 'grey' } size={20} />}
                      Monday
                      </div>
                    </li>

                    <li>
                        <div onClick={() => this.onClickWeekDay(2)}>
                      {this.state.planning[2] && <MaterialIcon icon={ 'check_circle' } color={ 'green' } size={20} />}
                      {!this.state.planning[2] && <MaterialIcon icon={ 'check_circle_outline' } color={ 'grey' } size={20} />}
                      Tuesday
                      </div>
                    </li>

                    <li>
                        <div onClick={() => this.onClickWeekDay(3)}>
                        {this.state.planning[3] && <MaterialIcon icon={ 'check_circle' } color={ 'green' } size={20} />}
                        {!this.state.planning[3] && <MaterialIcon icon={ 'check_circle_outline' } color={ 'grey' } size={20} />}

                      Wednesday
                      </div>
                    </li>

                    <li>
                        <div onClick={() => this.onClickWeekDay(4)}>
                        {this.state.planning[4] && <MaterialIcon icon={ 'check_circle' } color={ 'green' } size={20} />}
                        {!this.state.planning[4] && <MaterialIcon icon={ 'check_circle_outline' } color={ 'grey' } size={20} />}

                      Thursday
                      </div>
                    </li>

                    <li>
                        <div onClick={() => this.onClickWeekDay(5)}>
                        {this.state.planning[5] && <MaterialIcon icon={ 'check_circle' } color={ 'green' } size={20} />}
                        {!this.state.planning[5] && <MaterialIcon icon={ 'check_circle_outline' } color={ 'grey' } size={20} />}

                      Friday
                      </div>
                    </li>

                    <li>
                        <div onClick={() => this.onClickWeekDay(6)}>
                        {this.state.planning[6] && <MaterialIcon icon={ 'check_circle' } color={ 'green' } size={20} />}
                        {!this.state.planning[6] && <MaterialIcon icon={ 'check_circle_outline' } color={ 'grey' } size={20} />}

                      Saturday
                      </div>
                    </li>

                    <li>
                        <div onClick={() => this.onClickWeekDay(7)}>
                        {this.state.planning[7] && <MaterialIcon icon={ 'check_circle' } color={ 'green' } size={20} />}
                        {!this.state.planning[7] && <MaterialIcon icon={ 'check_circle_outline' } color={ 'grey' } size={20} />}

                      Sunday
                      </div>
                    </li>
                </ul>

                <div className={`${CSS_NS}__button-area`}>

                <button className={`${CSS_NS}__button`}
                  onClick={closePortal}>
                    Cancel
                </button>

                <button className={`${CSS_NS}__button`}
                  onClick={(e) => (this.handleSaveClick(e, closePortal))}>
                  Save
                </button>

                <button className={`${CSS_NS}__button`}
                  onClick={(e) => (this.handleDeleteClick(e, closePortal))}>
                  Delete
                </button>

                </div>
              </form>
            )}
          </React.Fragment>
        )}
      </PortalWithState>
    );
  }
}

export default EditHabitModalComponent;
