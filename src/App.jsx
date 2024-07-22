import { useEffect, useState } from 'react'
import './App.css'
import { Todoprovider } from './context'                    // importing todo provider from the context  
import { TodoForm, TodoItem } from './components'


function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {

    setTodos(prev => [...prev, { id: Date.now(), ...todo }]);

  }


  const updateTodo = (id, todo) => {

    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))

  }

  const deleteTodo = (id) => {

    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {

    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }


  useEffect(() => {

    const todos = JSON.parse(localStorage.getItem('todos'))

    

    if (todos && todos.length > 0) {

      setTodos(todos)
    }

  }, [])


  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])



  return (


    // passing these values as a global context 

    <Todoprovider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>   

      <div className='main-container'>
        <div >
          <h1 >Manage Your Todos</h1>
          <div className='todo-form-container'>
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className='todos-container'>
            {/*Loop and Add TodoItem here */}

            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>     
                <TodoItem todo={todo} />
              </div>
            ))}

          </div>
        </div>
      </div>

    </Todoprovider>    
  )
}

export default App
