import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './Components/Hero/Hero';
import reportWebVitals from './reportWebVitals';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Error from './Components/ErrorPage/Error'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, createRoutesFromElements } from "react-router-dom";
import Layout from './Layout';

/* const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      ,
    ]
  },
  {
    paht:'/About',
    element: <About/>,
  }
]) */



const router = createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<Layout />}>

    <Route path='about' element={<About />} />
    <Route path='' element={<Hero/>}/>
  </Route>


))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
