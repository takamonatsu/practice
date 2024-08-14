import React from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import './style/App.css';
import './style/reset.css';
import Login from './components/Longin/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
