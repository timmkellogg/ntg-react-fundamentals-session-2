
function ToDo({ index, task, handleToggle, handleRemove }) {

    return (
        <li>
            <span onClick={() => handleToggle(index)} style={{ textDecoration: task.completed && 'line-through' }}>{task.name}</span>
            <button onClick={() => handleRemove(index)}>remove</button>
        </li>
    )
}

export default ToDo