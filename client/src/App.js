import React from 'react'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Playlist from './components/Playlist';

import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>}/>
      <Route path='/Playlist' element={<Playlist/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      
    </Routes>

    <Footer/>
    </>
  );
}

export default App;
