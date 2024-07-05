import React from 'react';
import AddBtn from './AddBtn';

import ListTasks from './ListTasks';
import Filter from './Filter';

function Tasks() {
    return (
        <div className='flex justify-center items-center text-center gap-5 flex-wrap md:flex-row my-10'>
            <AddBtn/>
            <Filter/>
            <ListTasks/>
        </div>
    );
};

export default Tasks;