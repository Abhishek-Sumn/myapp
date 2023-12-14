import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './Components/Hero/Hero';
import reportWebVitals from './reportWebVitals';
import About from './Components/About/About';
import Error from './Components/ErrorPage/Error'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Route, createRoutesFromElements } from "react-router-dom";
import Layout from './Layout';
import Contact from './Components/Contact/Contact';
import RestaurantMenu from "./Components/RestaurantMenu/RestaurantMenu"
import Profile from "./Components/About/Profile"
import Instamart from './Components/Instamart/Instamart';

const router = createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<Layout />} errorElement={<Error />}>

    <Route path='/about' element={<About />} />
    <Route path='/about/profile' element={<Profile />} />


    <Route path='' element={<Hero />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/instamart' element={<Instamart />} />

    <Route path='/restaurant/:id' element={<RestaurantMenu />} />

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
