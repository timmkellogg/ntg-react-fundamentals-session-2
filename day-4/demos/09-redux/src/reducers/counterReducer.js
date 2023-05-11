import { createStore } from 'redux';

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}



// store = centralized location for state

// action = action that is being performed on state

// reducer = function that matches dispatched action with function that applies action

const store = createStore(counterReducer);

export default store