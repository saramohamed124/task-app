import React from 'react';

function InputTask() {
    return (
        <div>
            <input
            type="text"
            placeholder="Add New Task"
            className="input input-bordered input-sm w-full max-w-xs rounded-[20px]" />
        </div>
    );
}

export default InputTask;