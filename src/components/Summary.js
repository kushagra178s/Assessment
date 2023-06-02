import React from "react";
import {Link, useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
function Summary() {
  const location = useLocation();
  const [showForm, setShowFrom] = useState(false);
  // useEffect(() => {console.log(location);},[]);
  // console.log(location);
  const handleClick = () => {
      return setShowFrom(!showForm)
  }
  return (
    <div className="summary-section">
        <h1 >Summary of the Movie or Series</h1>
        <img src={location.state.image} alt="" width={'150px'}/>
        <h1>Name : {location.state.name}</h1>
        <h1>Summary of the Series : </h1>
        <h1>{location.state.summary}</h1>
        <br />
        <button onClick={handleClick}>Book Tickets</button>
        {showForm && <div className="form-section">
          <form action="/">
              <fieldset>
                <legend>details</legend>
                <label for="name">Name : </label>
                <input type="text" id="name"/>
                <br/><br/>
                <label for="email">Email : </label>
                <input type="email" id="email"/>
                <br/><br/>
                <label for="phone">Phone : </label>
                <input type="tel" id="phone"/>
                <br/><br/>
                <label for="tickets">Tickets : </label>
                <input type="number" id="tickets"/> 
                <br/><br/>
                <label for="price">Price : </label>
                <input type="number" id="price" max="150" min="90"/>
                <br/><br/>
                <button type="submit" onClick={ ()=>{alert('tickets booked')} }>Submit</button>
              </fieldset> 
              <br/><br/>
          </form> 
        </div> }
    </div>
  );
}
export default Summary;