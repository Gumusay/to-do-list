import React, {useState} from "react"
import { TodoForm } from "./TodoForm"
import { Todo } from "./Todo"
import { EditTodoForm } from "./EditTodoForm"

export const TodoWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTodo = todo =>{
        const newTodo = {
          id: crypto.randomUUID(), // rastgele id oluşturur
          task: todo,
          isEditing:false,
          completed: false
        }
    
        setTodos([...todos, newTodo]);
        console.log(todos);
      }

    //   const toggleComplete = id => {
    //     setTodos(todos.map(todo => todo.id === id ? {
    //         ...todo, completed: !todo.completed} : todo
    //     ))
    //   }

    ///find ile yapımı

    const toggleComplete = id => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
    
        setTodos(updatedTodos);
    };



    //   const deleteTodo = id => {
    //     setTodos(todos.filter(todo => todo.id !== id ? 
    //         {...todo, isEditing: !todo.isEditing} : todo))
    //   }

      const deleteTodo = id => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
      }

      const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ?
            {...todo, isEditing: !todo.isEditing} : todo))
      }

      const editTask= (task, id) =>{
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, task, isEditing: !todo.isEditing}: todo))
      }

    return (
        <div className="TodoWrapper">
            <h1>TO DO LİST</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask}
                    task={todo} />
                ) : 
                (<Todo task={todo} key={index} 
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}/>)
            ))}
           

        </div>
    )
}