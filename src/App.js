import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Navbar from './Pages/Navbar';
import TodoProvider from './context/TodoProvider';

function App() {
  return (
    <div>
      <TodoProvider>
        <Navbar/>
    <Routes>
      <Route element={<Home/>} path='/'></Route>
      <Route element={<Signup/>} path='/signup'></Route>
    </Routes>
   </TodoProvider>
    
    </div>
  );
}

export default App;
