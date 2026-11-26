import { useContext } from "react"
import Listitem from "./Listitem"
import TodoContext from "../context/TodoContext"

const ListGroup = () => {

   const {todos , clearAllTodo} = useContext(TodoContext)

    return(
       <>
       <button onClick={clearAllTodo} className="my-4 bg-red-500 hover:bg-red-600 cursor-pointer text-white font-bold p-2 w-1/4">Clear </button>
        <ul className="my-4 ">
              {
                todos.map((todo)=>{
                     return(
                        <Listitem key={todo.id} todo = {todo} />
                     )
                })
              }
            </ul>
       </>

    )
}

export default ListGroup 