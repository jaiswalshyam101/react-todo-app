import { createContext, useState } from "react";

const TodoContext = createContext()



export const TodoProvider = ({children}) => {

    const [edit , setEdit] = useState({
        todo : {},
        isEdit : false
    })
    
    const [theme, setTheme] = useState(false)


    const changeTheme = () => {
        setTheme(!theme)
    }

   

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const addTodo = (todo) => {
       setTodos([todo , ...todos])

    }

    const editTodo = (todo) => {
         setEdit({
            todo : todo,
            isEdit : true
        })
    }

    const updateTodo = (updated) => {
        setTodos(todos.map ((todo) => {
            if(todo.id === updated.id){
                return updated
            }else{
               return todo
            }
        }))

        setEdit({todo : {}, isEdit : false })

    }


    const[todos , setTodos] = useState([{id : 1 , text : "I am from Context!" }])

     const clearAllTodo  = () => {

        setTodos([])

    }

      return(
        <TodoContext.Provider value={{todos, theme , edit , addTodo , updateTodo , removeTodo ,editTodo ,clearAllTodo , changeTheme}}>
            {children}
        </TodoContext.Provider>
      )
}
export default TodoContext