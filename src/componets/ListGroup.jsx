import Listitem from "./Listitem"

const ListGroup = ({todos , clearAllTodo , removeTodo , editTodo}) => {
    return(
       <>
       <button onClick={clearAllTodo} className="my-4 bg-red-500 hover:bg-red-600 cursor-pointer text-white font-bold p-2 w-1/4">Clear </button>
        <ul className="my-4 ">
              {
                todos.map((todo)=>{
                     return(
                        <Listitem key={todo.id} todo = {todo} removeTodo={removeTodo} editTodo={editTodo}/>
                     )
                })
              }
            </ul>
       </>

    )
}

export default ListGroup 