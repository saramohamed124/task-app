import React, {  useEffect, useState } from 'react';
import filter_icon from './assets/icons/filter_icon.svg';

function Filter(props) {
    const [data, setData] = useState(props.task);
    const [enableFilter,setEnableFilter] = useState(true)
    const [updateAfterFilter,SetUpdateFilter] = useState(0)

    useEffect(() => {
        const storedTasks = localStorage.getItem('Tasks');
        if (storedTasks) {
            setData(JSON.parse(storedTasks));
        }
    },[updateAfterFilter]);


    const handleFilter = () => {
        const completedTasks = data.filter(task => task.compeleted )
        SetUpdateFilter(pre => pre + 1)
        if(enableFilter && completedTasks){
            props.setTasks(completedTasks)
            setEnableFilter(!enableFilter)
        }else{
            props.setTasks(data)
            setEnableFilter(!enableFilter)
        }
    };

    return (
        <div>
            <img className='mb-2' src={filter_icon} alt='filter-icon' onClick={handleFilter} />
        </div>
    );
};

export default Filter;
