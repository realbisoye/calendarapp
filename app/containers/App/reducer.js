import {
  LOAD_REMINDERS_SUCCESS, LOAD_REMINDERS, LOAD_REMINDERS_ERROR, ADD_REMINDER, ADD_REMINDER_REQUEST
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  reminders: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REMINDERS: {
      const newState = {
        ...state,
        loading: true,
        error: false,
        reminders: []
      };

      return newState;
    }

    case ADD_REMINDER_REQUEST: {
      const newState = {
        ...state,
        loading: true,
        error: false,
      };

      return newState;
    }

    case LOAD_REMINDERS_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        reminders: action.reminders,
      };
      return newState;
    }

    case ADD_REMINDER: {
      const newState = {
        ...state,
        loading: false,
        reminders: [...state.reminders, action.reminder],
      };
      return newState;
    }

    case LOAD_REMINDERS_ERROR: {
      return { ...state, error: action.error, loading: false };
    }
    default:
      return state;
  }
}

export default appReducer;
