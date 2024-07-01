import React from 'react';
import ContentSide from '../components/Signup/ContentSide';
import FormSignup from '../components/Signup/FormSignup';

function Signup() {
    return (
        <div className=' h-screen flex justify-between'>
            <FormSignup/>
            <ContentSide/>
        </div>
    );
};

export default Signup;