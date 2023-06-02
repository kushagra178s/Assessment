import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import MoviesCard from './components/MoviesCard';
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(" https://api.tvmaze.com/search/shows?q=all")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  // console.log(data);
  return (
    
    <div >
      <Header/>
      <div className="movies-section container">
        {data.map(item => (
          <MoviesCard key={item.show.id} 
            image = {item.show.image.original}
            name = {item.show.name} 
            rating = {item.show.rating.average}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
