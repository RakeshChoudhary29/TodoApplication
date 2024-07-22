import {createContext,useContext} from 'react'


export const TodoContext = createContext({    // create a context  str=createContext() it return a object;
  
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false
        }                               
    ],                                          //default values of the object 

    addTodo: (todo) =>{},
    updateTodo :(id,todo) =>{},
    deleteTodo:(id) =>{},
    toggleComplete :(id) =>{}
})


export const useTodo = () =>{

    return useContext(TodoContext)                   // returns the object to be used by consumer 
}


export const Todoprovider = TodoContext.Provider      // used by provider to provide the data to the consumer


// by using Todoprovider we can directly use <Todoprovider value={}>

//otherwise we need to import useTodo and do <useTodo.Provider value={}> 

