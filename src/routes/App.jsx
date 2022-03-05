import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingLayout } from '../container/LandingLayout/LandingLayout'
import { Home } from '../pages/Home/Home';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';

const App = () => {
  return (
    <BrowserRouter>
      <LandingLayout>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/login'} element={<Login />} />
        </Routes>
      </LandingLayout>
    </BrowserRouter>
  );
};

export { App };
