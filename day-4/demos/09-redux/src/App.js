import { Provider } from 'react-redux';
import store from './reducers/counterReducer';

import ReduxExample from './ReduxExample'

function App() {

  return (
    <Provider store={store}>
      <ReduxExample />
    </Provider>
  );
}

export default App;
