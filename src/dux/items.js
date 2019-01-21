import moment from 'moment';
import uuid from 'uuid/v4';

export const MARK_AS_DONE = 'MARK_AS_DONE';

export const markAsDone = ({id, dayString}) => {
  return {
    type: MARK_AS_DONE,
    payload: {id, dayString}
  };
};

const initialState = {
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
    default:
      return state;
  }
}