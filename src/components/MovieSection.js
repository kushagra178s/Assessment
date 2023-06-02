import React, { useState, useEffect } from "react";
import MoviesCard from './MoviesCard';
function MovieSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(" https://api.tvmaze.com/search/shows?q=all")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  console.log(data);
  return (
    <div className="movies-section container">
      {data.map(item => (
        <MoviesCard key={item.show.id} image = {item.show.image.original} name = {item.show.name} rating = {item.show.rating.average} language = {item.show.language} runtime = {item.show.runtime} summary = {item.show.summary}/> 
      ))}
    </div>
  );
}
export default MovieSection;