import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Hello Redux</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment By 5</button>
      <hr />
      <h1>To Do List</h1>
      
    </div>
  )
}

export default App
