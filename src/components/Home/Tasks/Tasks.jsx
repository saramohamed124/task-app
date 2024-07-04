import React from 'react';
import AddBtn from './AddBtn';

function Tasks() {
    return (
        <div className='flex justify-center items-center text-center gap-5 flex-wrap md:flex-row my-10'>
            <AddBtn/>
        </div>
    );
};

export default Tasks;