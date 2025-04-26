import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import HomePage from './Home';
import AboutPage from "./About"
import CoursePage from './Course';
import EventPage from "./Event"; 
import FrontPage from "./Front";
import BackPage from './Back';
import CourseHomePage from './CourseHome';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
    <Routes>

    <Route path="/" element={<HomePage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/event" element={<EventPage/>}/>
      <Route path="/course/" element={<CoursePage/>}>
      <Route path="front" element={<FrontPage/>}/>
      <Route path="back" element={<BackPage/>}/>
      <Route path="" element={<CourseHomePage/>}/>
      </Route>


    <Route path="/*" element={<h1 align="center">Page Not Found</h1>}/>

    </Routes>

</BrowserRouter>

);
