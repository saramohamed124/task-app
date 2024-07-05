import React from 'react';
import compeleted_icon from './assets/icons/task_compeleted.svg';
import edit_icon from './assets/icons/edit_icon.svg';
import delete_icon from './assets/icons/delete_icon.svg';
import empty_img from './assets/imgs/empty_img.png';
import { useTasks } from '../../../context/TodoProvider';

function ListTasks() {
    const { 
        tasks,
        handleDeleteTask,
        editTask,
        handleEditTask,
        currentTask,
        setCurrentTask,
        handleSaveTask,
        handleCompeleted
        } = useTasks();

    return (
        <div className='text-center w-full'>
            <ul className='bg-[--main-darkblue-hover-color] p-4 rounded-[12px] flex flex-col gap-y-6 justify-center w-full'>
                {tasks.length >= 1 && window.localStorage.getItem('User')  ? (
                    <>
                        {tasks.map((task)  => (
                            <li key={task.id} className={`bg-[--text-gray-color] p-4 rounded-[12px] flex justify-between items-center `}>
                                {editTask === task.id ? (
                                    <input type='text'
                                    value={currentTask}
                                    onChange={(e)=> setCurrentTask(e.target.value)}
                                    />
                                ):(
                                <p className={`${task.compeleted ? "line-through": ""}`}>{task.name}</p>
                                )}
                                <div className='icons flex justify-between items-center gap-5'>
                                    <img
                                        style={{backgroundColor: task.compeleted ? "#ADACAC" : ""}}
                                        className = 'rounded-[50%] py-1'
                                        src={compeleted_icon}
                                        alt='compeleted icon'
                                        onClick={()=> handleCompeleted(task.id)}
                                        />
                                    {editTask === task.id ? (
                                        <button onClick={() => handleSaveTask(task.id)} style={{ textDecoration: "none" }}>Save</button>
                                    ) : (
                                        <img
                                            src={edit_icon}
                                            alt='edit icon'
                                            onClick={() => handleEditTask(task.id)}
                                        />
                                    )}
                                    <img
                                        src={delete_icon}
                                        alt='delete icon'
                                        onClick={() => handleDeleteTask(task.id)}
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
