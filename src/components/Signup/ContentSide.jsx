import React from 'react';
import signup_img from './assets/imgs/signup.svg'
const ContentSide = () => {
    return (
        <div className='container flexbox flex-col'>
            <div className='text-content text-center flexbox flex-col'>
                <h1 className='text-2xl'>Welcome To Our Task Management Website</h1>
                <p className="text-[#ADACAC] text-[15px] w-[70%] min-w-[20rem] font-sans">Sign up To Access All Features</p>
            </div>
            <img className='max-w-[456px]' src={signup_img} alt='signup'></img>
        </div>
    );
};

export default ContentSide;