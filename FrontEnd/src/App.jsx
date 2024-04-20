import { Route,Routes } from 'react-router-dom';
import './App.css';
import LoginUser from './components/LoginUser';
import RegisterUser from './components/RegisterUser';
import Read from './components/Read';
import Update from './components/Update';
import GetAll from './components/GetAll';
import Create from './components/Create';


import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="container">
      <Routes>
        {/* <Route /> */}


        <Route path='/' element={<LoginUser />} />
        <Route path='/login' element={<LoginUser />} />

        <Route path='/register' element={<RegisterUser/>} />

        <Route path='/Create' element={<Create/>} />

        <Route path='/read/:id' element={<Read/>} />
        <Route path='/getAll' element={<GetAll/>} />

        <Route path='/update/:id' element={<Update/>} />

      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
