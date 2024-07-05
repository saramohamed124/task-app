import React, { useState } from 'react';
import InputTask from './InputTask';
import { useTasks } from '../../../context/TodoProvider';

function AddBtn() {
    const [task, setTask] = useState('');
    const { handleAddnewTask } = useTasks();
  
    const handleAddTask = () => {
        if (window.localStorage.getItem('User')) {
            if (task.trim().length >= 2) {
                handleAddnewTask(task)
                setTask('') // Clear input after adding
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
        </div>
    );
}

export default AddBtn;
