import React from 'react';
import ContentSide from '../components/Signup/ContentSide';
import FormSignup from '../components/Signup/FormSignup';

function Signup() {
    return (
        <div className='flex justify-between sm:flex-row flex-col-reverse'>
            <FormSignup/>
            <ContentSide/>
        </div>
    );
};

export default Signup;