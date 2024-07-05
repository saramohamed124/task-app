import React from 'react';
import filter_icon from './assets/icons/filter_icon.svg';
import { useTasks } from '../../../context/TodoProvider';

function Filter() {
    const { setFilter } = useTasks();

    const toggleFilter = () => {
        setFilter((prevFilter) => (prevFilter === 'all' ? 'compeleted' : 'all'));
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
