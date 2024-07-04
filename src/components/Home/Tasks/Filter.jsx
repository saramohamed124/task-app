import React, { useEffect, useState } from 'react';
import filter_icon from './assets/icons/filter_icon.svg';

function Filter(props) {
    const [data, setData] = useState(props.tasks);

    useEffect(() => {
        const storedTasks = localStorage.getItem('Tasks');
        if (storedTasks) {
            setData(JSON.parse(storedTasks));
        }
    },[]); // Empty dependency array to run this effect only once


    const handleFilter = () => {
        const completedTasks = data.filter(task => task.compeleted);
        setData(completedTasks);
        props.setFilter(true)
        // window.localStorage.setItem('Tasks', JSON.stringify(completedTasks));
    };

    return (
        <div>
            <img src={filter_icon} alt='filter-icon' onClick={handleFilter} />
        </div>
    );
};

export default Filter;
