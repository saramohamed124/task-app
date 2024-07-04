import React from 'react';

function InputTask({task,setTask}) {
    return (
        <div>
            <input
            type="text"
            placeholder="Add New Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="input input-bordered input-md md:w-[461px] max-w-[100%] rounded-[30px]" />
            {task.trim().length < 2 && <p className='text-red-600'>Write a task</p>}
        </div>
    );
}

export default InputTask;