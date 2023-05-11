import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counter/counterSlice'
import { addToDo, removeToDo } from './toDo/toDoSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const toDos = useSelector((state) => state.toDos.value)
  const dispatch = useDispatch()

  const [input, setInput] = useState('')

  const handleAddToDo = () => {
    if(!input) return

    dispatch(addToDo(input))
  }

  return (
    <div>
      <h1>Hello Redux</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment By 5</button>
      <hr />
      <h1>To Do List</h1>
      <input onChange={e => setInput(e.target.value)} />
      <button onClick={handleAddToDo}>add</button>
      <ul>
        {toDos.map((toDo, index) => {
          return <li>{toDo} <button onClick={() => dispatch(removeToDo(index))}>remove</button></li>
        })}
      </ul>
    </div>
  )
}

export default App
