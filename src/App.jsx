import { StrictMode, useState } from "react"
import Navbar from "./componets/Navbar"
import Form from "./componets/Form"
import ListGroup from "./componets/ListGroup"

const App = () => {

    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Do somthing...,"

        },
        {
            id: 2,
            text: "Do somthing more...,"

        },
        {
            id: 3,
            text: "Do somthing Again...,"

        }
    ])

    const [edit , setEdit] = useState({
        todo : {},
        isEdit : false
    })
    
    const [theme, setTheme] = useState(false)


    const changeTheme = () => {
        setTheme(!theme)
    }

    const clearAllTodo  = () => {

        setTodos([])

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


    return (
        <StrictMode>
            <Navbar theme={theme} changeTheme={changeTheme} />
            <div className={theme ? "min-h-screen p-8 bg-gray-800 text-gray-300" : "p-8"}>
                <Form addTodo={addTodo} edit={edit} updateTodo={updateTodo} />
                <ListGroup todos={todos} clearAllTodo={clearAllTodo} removeTodo={removeTodo} editTodo={editTodo} />
            </div>
        </StrictMode>
    )
}

export default App 