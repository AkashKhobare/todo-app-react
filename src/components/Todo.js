import React, { useState } from "react";
import './Todo.css'
import MaterialIconsReact from 'material-icons-react';

const Todo = (props) => {
    const { title } = props;
    const [ isComplete, setIsComplete ] = useState(false); 

    return (
        <div>
            <div className="todo-container">
                <input 
                    type="checkbox" 
                    defaultChecked={isComplete}
                    onChange={() => setIsComplete(!isComplete)}/>
                <p className="todo-title">{title}</p>
                {isComplete && <MaterialIconsReact icon="check_circle_outline" />}
            </div>
            <hr />
        </div>
    )
}

export default Todo;