import React, { useState } from 'react';

function TodoProvider(props) {
    const [todo,setTodo] = useState([]);

    const handleAddnewTask = (todo) => {
        setTodo(previous => [...previous,todo])
    }
    return (
        <div>
            
        </div>
    );
}

export default TodoProvider;