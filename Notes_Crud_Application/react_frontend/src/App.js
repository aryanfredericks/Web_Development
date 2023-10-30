import './App.css';
import Navbar from './components/Navbar';
import { Route,Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import AddNote from './components/AddNote';
import ViewNote from './components/ViewNote';
import EditNote from './components/EditNote';

function App() {
  return (
    <>
      <div className='h-screen relative bg-gray-700'>
        <Navbar />
        <div className='container-fragment'>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/add' element={<AddNote/>}/>
              <Route path='/view' element={<ViewNote/>}/>
              <Route exact path='/edit-user/:id' element={<EditNote/>}/>
            </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
