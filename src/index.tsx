import React from 'react';
import ReactDOM from 'react-dom/client';
import { Categories, Home, Login, Profile, SignUp, SaveUser,  Users } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/saveUser' element={<SaveUser />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
    </Routes>
  </BrowserRouter>
);
