import React from 'react';
import Filter from './Filter';
import AddBtn from './AddBtn';
import ListTasks from './ListTasks';

function Tasks() {
    return (
        <div className='flex justify-center items-center text-center gap-5 flex-wrap md:flex-row my-10'>
            <AddBtn/>
        </div>
    );
};

export default Tasks;