
function ToDo({ index, item, handleToggle, handleDelete }) {
    return (
        <li key={index}>
            <span 
                onClick={() => handleToggle(index)} 
                style={{ textDecoration: item.completed && 'line-through' }}>
                    {item.taskName}
            </span>

            <button onClick={() => handleDelete(index)}>
                delete
            </button>
        </li>
    )
}

export default ToDo