import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route element={<Home/>} path='/'></Route>
      <Route element={<Signup/>} path='/signup'></Route>
    </Routes>
    </div>
  );
}

export default App;
