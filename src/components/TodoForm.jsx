import React, { useState } from "react";
import { useTodo } from "../context";
import './TodoForm.css'

function TodoForm() {
    
    const [todo,setTodo] = useState("")

    const {addTodo}= useTodo()

    const add = (e) =>{ 

        e.preventDefault()
        
        if(!todo) return 

        addTodo({ todo,completed:false })

        setTodo("")
       
    }

    return (
        <form onSubmit = {add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."              
                className='todo-input'
             value={todo}
             onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="todo-add-button">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

