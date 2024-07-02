import React from 'react';
import signup_img from './assets/imgs/signup.svg'
const ContentSide = () => {
    return (
        <div className='p-15 pt-16 flexbox flex-col flex-1'>
           
            <div className='text-content text-center flexbox flex-col'>
                <h1 className='text-[30px] font-sans w-11/12'>Welcome To Our Task Management Website</h1>
                <p className="text-[#ADACAC] text-[18px] w-[70%] min-w-[20rem] font-sans p-1">Sign up To Access All Features</p>
            </div>
            <img className='max-w-[425px]' src={signup_img} alt='signup'></img>
        </div>
    );
};

export default ContentSide;