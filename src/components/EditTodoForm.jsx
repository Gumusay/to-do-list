import react, {useState} from "react"

//bu satır react ve useState fonksiyonunu içeri aktarır.
//useState bir bileşenin durumunu yönetmek için kullanılır
//useState, React içinde durumu (state) yönetmek için kullanılan bir kancadır (hook).


export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    //useState kullanılarak value adında bir state yani bir durum tanımlanır 
    //ve bu durumu güncellek için set value tanımlanır
    //başlangıçta value boş bir dizgi ile başlar

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);

        setValue("")
        
    }

    //handleSubmit form gönderildiğinde çağırılır ve prevent default kullanılarak formun sayfasının
    //yeniden yüklenmesi engellenir
    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text"  className="todo-input" value = {value}
            placeholder="update task" onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="todo-btn">Update Task</button>

        </form>
    )
}