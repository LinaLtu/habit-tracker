import moment from 'moment';
import uuid from 'uuid/v4';

export const MARK_AS_DONE = 'MARK_AS_DONE';
export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
// export const MODAL_OPEN = 'MODAL_OPEN';

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

// export const modalOpen = (isModalOpen) => {
//   return {
//     type: MODAL_OPEN,
//     payload: isModalOpen
//   }
// }

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
  const weekday = moment(dayString).isoWeekday();
  return item.planning[weekday];
}

export default function itemsReducer(state = initialState, action) {
  console.log(`Received action ${action.type}`, action)

  switch (action.type) {
    case MARK_AS_DONE: {
      let index = state.items.findIndex(stateItem => {
        return stateItem.id === action.payload.id
      });

      if (index === -1) {
        return state;
      }

      const newState = { ...state };
      const selectedItem = newState.items[index];

      if (!isItemPlanned(selectedItem, action.payload.dayString)) {
        return state;
      }

      let itemProgress = selectedItem.progress;
      itemProgress[action.payload.dayString] = true;

      return Object.assign({}, state, newState);
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
    //     case MODAL_OPEN: {
    //       console.log('Modal open', action.payload)
    //       return Object.assign({}, state, { isModalOpen: action.payload });
    //     }
    default:
      return state;
  }
}
