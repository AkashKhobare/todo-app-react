import React, { useState } from "react";

import './AddTodo.css';
import Todo from "./Todo";

const AddTodo = (props) => {

    const [ ipField, setIpField ] = useState({})

    const ipHandler = (e) => {
        if(e.target.value) {
            setIpField({
                [e.target.name]: e.target.value
            })
        }
    }

    const addTodo = () => {
        if(ipField.title && ipField.title !== "") {
            props.addTodo(
                <Todo 
                    title={ipField.title}  
                    key={ipField.title} 
                />
            )
        }
    }

    return (
        <div className="add-todo-container">
            <input type="text" 
                   placeholder="What do you like to do today..." 
                   className="add-todo-input"
                   name="title"
                   onChange={ipHandler}/>
            <input type="submit" 
                   value="add" 
                   className="add-todo-btn"
                   onClick={addTodo}/>
        </div>
    )
}

export default AddTodo;