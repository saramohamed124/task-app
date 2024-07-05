import React, { useEffect, useState } from 'react';
import compeleted_icon from './assets/icons/task_compeleted.svg';
import edit_icon from './assets/icons/edit_icon.svg';
import delete_icon from './assets/icons/delete_icon.svg';
import empty_img from './assets/imgs/empty_img.png';
import Filter from './Filter';

function ListTasks(props) {
    const [data, setData] = useState(props.value);
    const [editTask,setEditTask] = useState(null)
    const [update, setUpdate] = useState(0)
    const [currentTask, setCurrentTask] = useState("");

    // Get Data From  Local Storage And update in IN Data
    useEffect(() => {
        const storedTasks = localStorage.getItem('Tasks');
        if (storedTasks) {
            setData(JSON.parse(storedTasks));
        }
    },[props.value]);

    useEffect(() => {
        const storedTasks = localStorage.getItem('Tasks');
        if (storedTasks) {
            setData(JSON.parse(storedTasks));
        }
    },[update]);

    const handleEdit = (index) => {
        setEditTask(index);
        setCurrentTask(data[index].task);
    }
    
    const handleSave = (index) => {
        const newTasks = [...data];
        newTasks[index].task = currentTask;
        setData(newTasks);
        setEditTask(null);
        setCurrentTask("")
        localStorage.setItem('Tasks', JSON.stringify(newTasks));
    }

    const handleDeleteTask = (index) => {
        const newTasks = data.filter((_, i) => i !== index);
        setUpdate(pre => pre + 1)
        localStorage.setItem('Tasks', JSON.stringify(newTasks));
        setData(newTasks);
    };

    const handleCompeleted = (index) => {
        const newTasks = [...data]
        newTasks[index].compeleted = !newTasks[index].compeleted;
        setData(newTasks)
        localStorage.setItem('Tasks', JSON.stringify(newTasks));
    }
    return (
        <div className='text-center'>
            <Filter task={data} setTasks={setData} /> {/* Pass the tasks array to Filter */}
            <ul className='bg-[--main-darkblue-hover-color] p-4 rounded-[12px] flex flex-col gap-y-6 justify-center w-full'>
                
                {data.length >= 1 && window.localStorage.getItem('User')  ? (
                    <>
                        {data.map((e, index)  => (
                            <li key={index} className={`bg-[--text-gray-color] p-4 rounded-[12px] flex justify-between items-center `}>
                                {editTask === index ? (
                                    <input type='text' value={currentTask} onChange={(e)=> setCurrentTask(e.target.value)}></input>
                                ):(
                                <p className={`${e.compeleted ? "line-through": ""}`}>{e.task}</p>
                                )}<div className='icons flex justify-between items-center gap-5'>
                                    <img onClick={()=> handleCompeleted(index)} style={{backgroundColor: e.compeleted ? "#ADACAC" : ""}} className = 'rounded-[50%] py-1' src={compeleted_icon} alt='completed icon' />
                                    {editTask === index ? (
                                    <button style={{textDecoration:"none"}} onClick={()=>handleSave(index)}>Save</button>
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
