import React, { useEffect, useState } from 'react';
import compeleted_icon from './assets/icons/task_compeleted.svg';
import edit_icon from './assets/icons/edit_icon.svg';
import delete_icon from './assets/icons/delete_icon.svg';
import empty_img from './assets/imgs/empty_img.png';

function ListTasks(props) {
    const [data, setData] = useState([]);
    const [editTask,setEditTask] = useState(null)
    const [currentTask, setCurrentTask] = useState("");

    useEffect(() => {
        // setUpdate(pre => pre +1)
        const storedTasks = localStorage.getItem('Tasks');
        if (storedTasks) {
            setData(JSON.parse(storedTasks));
        }
    },[props.value]);

    const handleEdit = (index) => {
        setEditTask(index)
        setCurrentTask(data[index])
    }

    
    const handleSave = (index) => {
        const newTasks = [...data];
        newTasks[index]= currentTask;
        setData(newTasks);
        localStorage.setItem('Tasks', JSON.stringify(newTasks));
        setEditTask(null);
        setCurrentTask("")
    }

    const handleDeleteTask = (index) => {
        const newTasks = data.filter((_, i) => i !== index);
        setData(newTasks);
        localStorage.setItem('Tasks', JSON.stringify(newTasks));
    };

    return (
        <div className='text-center'>
            <ul className='bg-[--main-darkblue-hover-color] p-4 rounded-[12px] flex flex-col gap-y-6 justify-center'>
                {data.length >= 1 && window.localStorage.getItem('User') ? (
                    <>
                        {data.map((e, index) => (
                            <li key={index} className='bg-[--text-gray-color] p-4 rounded-[12px] flex justify-between items-center'>
                                {editTask === index ? (
                                    <input type='text' value={currentTask} onChange={(e)=> setCurrentTask(e.target.value)}></input>
                                ):(
                                <p>{e}</p>
                                )}<div className='icons flex justify-between items-center gap-5'>
                                    <img className='hover:bg-[#ADACAC] rounded-[50%] py-1' src={compeleted_icon} alt='completed icon' />
                                    {editTask === index ? (
                                    <button onClick={()=>handleSave(index)}>Save</button>
                                        ):(
                                        <img src={edit_icon} alt='edit icon' onClick={() => handleEdit(index)} />
                                    )}
                                    <img
                                        src={delete_icon}
                                        alt='delete icon'
                                        onClick={() => handleDeleteTask(index)}
                                    />
                                </div>
                            </li>
                        ))}
                    </>
                ) : (
                    <div className='m-auto'>
                        <p className='text-white text-xl'>There aren't any tasks here</p>
                        <img className='max-w-full w-1/2 m-auto' src={empty_img} alt='emptyimg' />
                    </div>
                )}
            </ul>
        </div>
    );
}

export default ListTasks;
