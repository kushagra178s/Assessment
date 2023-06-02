import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import MoviesCard from './components/MoviesCard';
import Header from "./components/Header";
import Summary from "./components/Summary"
import MovieSection from './components/MovieSection'

function App() {

  return (
    <div >
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element = {<MovieSection/>}/>
            <Route path='/summary' element = {<Summary />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;