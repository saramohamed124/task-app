import React from 'react';
import Header from '../components/Home/Header/Header';
import Tasks from '../components/Home/Tasks/Tasks';
import Todo from '../components/Home/Tasks/Todo';

function Home () {
    return (
        <div className='container'style={{margin:'auto'}}>
            <Header/>
            <Tasks/>
            <Todo/>
        </div>
    );
};

export default Home;