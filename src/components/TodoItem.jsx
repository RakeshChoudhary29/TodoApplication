import React, { useState } from "react";
import { useTodo } from "../context";
import './TodoItem.css'



function TodoItem({ todo }) {

    const [isTodoEditable , setIsTodoEditable ] = useState(false)
    const [todoMsg , setTodoMsg] = useState(todo.todo)

    const {updateTodo , deleteTodo,toggleComplete} =useTodo()
    
    const editTodo = () =>{

        updateTodo(todo.id , {...todo,todo:todoMsg})
        setIsTodoEditable(false)

    }

   
    const toggleCompleted = () =>{

        toggleComplete(todo.id)


    }


    return (
        <div  className="todos"
               >
            <input className='check-box'
                type="checkbox"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input className='text-box'
                type="text"
                               value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className='edit-button'
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className='delete-button'
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
