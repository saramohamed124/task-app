import React from 'react';
import filter_icon from './assets/icons/filter_icon.svg';
import { useTasks } from '../../../context/TodoProvider';

function Filter() {
    const { setFilter } = useTasks();

    // Handle Filter Compeleted Tasks
    const toggleFilter = () => {
        // update filter based on prevFilter
        setFilter((prevFilter) => (prevFilter === 'all' ? 'compeleted' : 'all'));  // if all make it compeleted  other wise make it all (toggle it)
    };

    return (
        <div>
            <img
                className='mb-2'
                src={filter_icon}
                alt='filter-icon'
                onClick={toggleFilter}
                style={{ cursor: 'pointer' }}
            />
        </div>
    );
}

export default Filter;
