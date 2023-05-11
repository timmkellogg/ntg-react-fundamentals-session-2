
import { useSelector, useDispatch } from 'react-redux';

function ReduxExample() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
  
    const handleIncrement = () => {
      dispatch({ type: 'INCREMENT' });
    };
  
    const handleDecrement = () => {
      dispatch({ type: 'DECREMENT' });
    };
  
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    );
  }

export default ReduxExample