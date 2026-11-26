import { StrictMode, useContext, useState } from "react"
import Navbar from "./componets/Navbar"
import Form from "./componets/Form"
import ListGroup from "./componets/ListGroup"
import TodoContext from "./context/TodoContext"

const App = () => {

    const {theme} = useContext(TodoContext)

    return (
        <StrictMode>
            <Navbar  />
            <div className={theme ? "min-h-screen p-8 bg-gray-800 text-gray-300" : "p-8"}>
                <Form />
                <ListGroup/>
            </div>
        </StrictMode>
    )
}

export default App 