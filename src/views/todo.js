import React from "react";

const Todo = (props) => {
    const {todos,title,deleteTodo} = props;
    const handleDelete = (todo) => {
        deleteTodo(todo.id);

    }
    return(<>
         <div className='todos-container'>
            <div>{title}</div>
          {todos && todos.length > 0 && todos.map((todo, index) => {
             return (<li className='todo-child' key={todo.id}>{index + 1} - {todo.title}
              <button onClick={()=>handleDelete(todo)}>delete</button> </li>)
             }
          )}
           <hr />
        </div>
       
    </>)

}
export default Todo;