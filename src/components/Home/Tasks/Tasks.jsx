import React from 'react';
import InputTask from './InputTask';
import Filter from './Filter';
import AddBtn from './AddBtn';
import ListTasks from './ListTasks';

function Tasks() {
    return (
        <div>     
        <div className='flex justify-center items-center text-center gap-5 flex-wrap md:flex-row my-10'>
            <InputTask/>
            <Filter/>
            <AddBtn/>
        </div>
        <ListTasks/>
        </div>
    );
};

export default Tasks;