import moment from 'moment';
import uuid from 'uuid/v4';

export const MARK_AS_DONE = 'MARK_AS_DONE';
export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const GET_ITEM = 'GET_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const markAsDone = ({id, dayString}) => {
  return {
    type: MARK_AS_DONE,
    payload: {id, dayString}
  };
};

export const addNewItem = ({ title, planning }) => {
  return {
    type: ADD_NEW_ITEM,
    payload: { title, planning }
  };
};

export const getItem = (habitItem) => {
  return {
    type: GET_ITEM,
    payload: habitItem
  };
};

export const updateItem = ( habitItemId ) => {
  return {
    type: UPDATE_ITEM,
    payload: habitItemId
  }
}

export const deleteItem = ( habitItemId ) => {
  return {
    type: DELETE_ITEM,
    payload: habitItemId
  }
}


export const initialState = {
  items: [
    {
      id: uuid(),
      title: 'Read books',
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
        '2018-12-02': true,
        '2018-12-08': true
      }
    }
  ]
};

function isItemPlanned(item, dayString) {
  const weekdayAsNumber = moment(dayString).isoWeekday();
  return item.planning[weekdayAsNumber];
}

export default function itemsReducer(state = initialState, action) {
  console.log(`Received action ${action.type}`, action)

  switch (action.type) {
    case MARK_AS_DONE: {
      const clonedState = { ...state };

      const item = clonedState.items.find(stateItem => {
        return stateItem.id === action.payload.id
      });

      if (!item) {
        return state;
      }

      if(!isItemPlanned(item, action.payload.dayString)){
        return state
      }

      item.progress[action.payload.dayString] = true;

      return Object.assign({}, state, clonedState);

    }
    case ADD_NEW_ITEM: {
      // TODO Add validation!

      // Add new item to the item list
      const newState = { ...state };

      // const newHabit = action.payload;
      // newHabit.id = uuid();
      // Same as following, but with Spread operator:
      const newHabit = {
        id: uuid(),
        ...action.payload,
        progress: {}
      }

      newState.items.push(newHabit);

      console.log('This is our action', action, newState)
      return Object.assign({}, state, newState);
    }

    case GET_ITEM: {
      const index = state.items.findIndex(stateItem => {
        return stateItem.id === action.payload.id
      });

      if (index === -1) {
        return Object.assign({}, state);
      }

      return Object.assign({}, state, state.items[index]);
    }

    case DELETE_ITEM: {
      const clonedState = { ...state};

      clonedState.items = clonedState.items.filter(item => {
        return !(item.id === action.payload);
      });

      return Object.assign({}, state, clonedState);
    }

    default:
      return state;
  }
}
