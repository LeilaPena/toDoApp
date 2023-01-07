import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Categories, Home, Login, Profile, SaveCategory, SaveTask, SaveUser, SignUp, Users} from "./pages"
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='tasks/add' element={<SaveTask />} />
        <Route path='login' element={<Login />} />
        <Route path='profile' element={<Profile />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='users/'>
          <Route index element={<Users />} />
          <Route path='save/:userId' element={<SaveUser />} />
        </Route>
        <Route path='categories/'>
          <Route index element={<Categories />} />
          <Route path='save/:categoryId' element={<SaveCategory />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
