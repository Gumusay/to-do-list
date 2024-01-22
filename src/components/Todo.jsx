import react from 'react'


export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return (
        <div className='Todo'>
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' :""}`}>{task.task}</p>
            <div>
                <p onClick={() => editTodo(task.id)} className='edit-icon'>güncelle</p>
                <p onClick={() => deleteTodo(task.id)} className='delete-icon'>sil</p>
            </div>
        </div>
    )
}
