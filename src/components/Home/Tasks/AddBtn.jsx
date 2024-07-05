import React, { useState, useEffect } from 'react';
import InputTask from './InputTask';
import ListTasks from './ListTasks';

function AddBtn() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

   // Get Data From  Local Storage And update in IN Data
   useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('Tasks'));
    if (storedTasks) {
        setTasks(storedTasks);
    }
},[task]);

    const handleAddTask = () => {
        if (window.localStorage.getItem('User')) {
            if (task.trim().length >= 2) {
                const newTask = { task: task}; // Ensure the task object has a `completed` property
                const newTasks = [...tasks, newTask];
                setTasks(newTasks);
                window.localStorage.setItem('Tasks', JSON.stringify(newTasks));
                setTask(""); // Clear input after adding
            }
        } else {
            window.location.pathname = '/signup';
        }
    };

    return (
        <div>
            <div className='flex gap-5 flex-wrap justify-center items-center my-5'>
                <InputTask task={task} setTask={setTask} />
                <div className='flex justify-center gap-5 flex-wrap'>
                    <button 
                        onClick={handleAddTask} 
                        className='btn bg-[--main-darkblue-color] text-white font-light hover:bg-[--main-darkblue-hover-color]'
                    >
                        Add New Task
                    </button>
                </div>
            </div>
            <ListTasks value={tasks} /> {/* Ensure ListTasks receives the tasks array */}
        </div>
    );
}

export default AddBtn;
