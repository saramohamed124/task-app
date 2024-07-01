import React from 'react';

function InputTask() {
    return (
        <div>
            <input
            type="text"
            placeholder="Add New Task"
            className="input input-bordered input-md md:w-[461px] max-w-[100%] rounded-[30px]" />
        </div>
    );
}

export default InputTask;