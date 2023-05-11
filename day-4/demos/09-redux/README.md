# Redux

Redux is the offical state management library for React. Redux helps centrally manage state interactions as application state grows in complexity. 

## Installation

Redux can be installed into an existing application using npm.

``` bash
npm install react-redux @reduxjs/toolkit
```

New applications initialized by Create React App can also install Redux as a part of a template.

``` bash
# Redux + JS
npx create-react-app my-app --template redux

# Redux + TypeScript 
npx create-react-app my-app --template redux-typescript
```

## Using Redux + Redux Toolkit

`src/app/store.js`
``` js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
```

`src/reducers/counterReducer.js`
``` js
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

const store = createStore(counterReducer);

export default store
```


`src/App.js`
``` js
import { Provider, useSelector, useDispatch } from 'react-redux'
import store from './reducers/counterReducer'

function App() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <Provider store={store}>
      <div>
        <h1>Hello Redux</h1>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </Provider>
  )
}

export default App

```

## Resources

* [https://redux.js.org/introduction/getting-started](https://redux.js.org/introduction/getting-started)