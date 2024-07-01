import React from 'react';
import compeleted_icon from './assets/icons/task_compeleted.svg'
import edit_icon from './assets/icons/edit_icon.svg'
import delete_icon from './assets/icons/delete_icon.svg'

function ListTasks  (){
    return (
        <div>
            <ul className='bg-[--main-darkblue-hover-color] p-4 rounded-[12px]  flex flex-col gap-y-6'>
            <li className='bg-[--text-gray-color] p-4 rounded-[12px] flex justify-between items-center '>
                <p>sdfll</p>
                <div className='icons flex justify-between items-center gap-5'>
                <img className='hover:bg-[#ADACAC] rounded-[50%] py-1' src={compeleted_icon} alt='compeleted_icon'/>
                <img src={edit_icon} alt='edit_icon'/>
                <img src={delete_icon} alt='delete_icon'/>
                </div>
                </li>
                <li className='bg-[--text-gray-color] p-4 rounded-[12px] flex justify-between items-center'>
                <p>sdfll</p>
                <div className='icons flex justify-between items-center gap-5'>
                <img className='hover:bg-[#ADACAC] rounded-[50%] py-1' src={compeleted_icon} alt='compeleted_icon'/>
                <img src={edit_icon} alt='edit_icon'/>
                <img src={delete_icon} alt='delete_icon'/>
                </div>
                </li>
            </ul>
        </div>
    );
};

export default ListTasks;