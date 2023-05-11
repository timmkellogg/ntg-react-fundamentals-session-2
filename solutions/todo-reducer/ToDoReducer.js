import { useState, useReducer } from 'react'

function ToDo() {
    const [input, setInput] = useState('')
    const [toDos, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'add':
                return [...state, { taskName: action.payload, completed: false }]
            case 'remove':
                return state.filter((_, index) => index !== action.payload)
            case 'toggle':
                return state.map((toDo, index) => {
                    if (index !== action.payload) return toDo
                    
                    return { ...toDo, completed: !toDo.completed}
                })
            case 'reset':
                return []
            default:
                return state
        }
    }, [])


    const handleSubmit= (e) => {
        e.preventDefault()

        if(!input) return

        dispatch({ type: 'add', payload: input })

        setInput('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <button>add</button>
            </form>
            <ul>
                {toDos.map((toDo, index) => {
                    return (
                        <li key={index}>
                            <span onClick={() => dispatch({ type: 'toggle', payload: index })} style={{textDecoration: toDo.completed && 'line-through'}}>{toDo.taskName}</span>
                            <button onClick={() => dispatch({ type: 'remove', payload: index })}>remove</button>
                        </li>
                    )
                })}
            </ul>
            <br />
            {toDos.length > 0 && <button onClick={() => dispatch({ type: 'reset' })}>reset</button> }
        </div>
    )
}

export default ToDo