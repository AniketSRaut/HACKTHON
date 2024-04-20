import { Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
// import Read from './components/Read';
// import Update from './components/Update';
// import GetAll from './components/GetAll';
// import Create from './components/Create';
import Home from './components/Home';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import { useSelector } from 'react-redux'

function App() {
  // const user = useSelector((state) => state.user)
  return (
    <div className="container">
      <Routes>
        {/* <Route /> */}


        <Route path='/' element={<Login />} />
        <Route path='/userLogin' element={<Login />} />

        <Route path='/register' element={<RegisterUser/>} />

        {/* <Route path='/Create' element={<Create/>} />

        <Route path='/read/:id' element={<Read/>} /> */}
        {/* <Route path='/getAll' element={<GetAll/>} />

        <Route path='/update/:id' element={<Update/>} /> */}
        <Route path='/Home' element={<Home/>}/> 

      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
