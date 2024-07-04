import React from 'react';
import Header from '../components/Home/Header/Header';
import Tasks from '../components/Home/Tasks/Tasks';

function Home () {
    return (
        <div className='container'style={{margin:'auto'}}>
            <Header/>
            <Tasks/>
        </div>
    );
};

export default Home;