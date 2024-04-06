import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideNav from './routers/SideNav.jsx';
import Display from './routers/Display.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SideNav />}>
        <Route index={true} element={<App/>}/>
        <Route index={true} path='/brewInfo/:id' element={<Display/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
) 
