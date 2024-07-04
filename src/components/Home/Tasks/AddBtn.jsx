import React, { useState, useEffect } from 'react';
import InputTask from './InputTask';
import ListTasks from './ListTasks';
import Filter from './Filter';

function AddBtn() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Load tasks from localStorage on component mount
        const storedTasks = window.localStorage.getItem('Tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks)); // Take all Tasks in Stored Task (Tasks value in local Storage) and Add it in SetTasks 
        }
    },[task]);

    const handleAddTask = () => {
        if (window.localStorage.getItem('User')) {
            if (task.trim().length >= 2) {
            const newTasks = [...tasks, task];
            setTasks(newTasks);
            window.localStorage.setItem('Tasks', JSON.stringify(newTasks));
            setTask(''); // Clear input after adding
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
                <Filter/>
            </div>
        </div>
        <ListTasks value={task}/>
        </div>
    );
}

export default AddBtn;
