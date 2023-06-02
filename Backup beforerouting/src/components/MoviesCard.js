import React, { useState, useEffect } from "react";
import Summary from './Summary'
function MoviesCard(props) {
    // We need you to create a basic UI to display the show names and a few details about it (you can choose what you want to display along with the show name). Include a button for each of the shows to redirect the user to another screen that shows the summary of the particular show.
  return (
    <div >
       <div className="card">
        <img src={props.image} alt="ShowImage" width='150px' />
            <h1>{props.name}</h1>
            <h2>Rating : {!props.rating ? 'Unavailable' : props.rating}</h2>
            <button onClick={()=>(<Summary/>)}> More Details</button>
        </div>
    </div>
  );
}
export default MoviesCard;
// format
// {
//     "score": 0.7012024,
//     "show": {
//       "id": 34653,
//       "url": "https://www.tvmaze.com/shows/34653/all-american",
//       "name": "All American",
//       "type": "Scripted",
//       "language": "English",
//       "genres": ["Drama", "Sports"],
//       "status": "Running",
//       "runtime": 60,
//       "averageRuntime": 60,
//       "premiered": "2018-10-10",
//       "ended": null,
//       "officialSite": "http://www.cwtv.com/shows/all-american/",
//       "schedule": { "time": "20:00", "days": ["Monday"] },
//       "rating": { "average": 6.2 },
//       "weight": 98,
//       "network": {
//         "id": 5,
//         "name": "The CW",
//         "country": {
//           "name": "United States",
//           "code": "US",
//           "timezone": "America/New_York"
//         },
//         "officialSite": "https://www.cwtv.com/"
//       },
//       "webChannel": null,
//       "dvdCountry": null,
//       "externals": { "tvrage": null, "thetvdb": 348200, "imdb": "tt7414406" },
//       "image": {
//         "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg",
//         "original": "https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg"
//       },
//       "summary": "<p>When a rising high school football player from South Central L.A. is recruited to play for Beverly Hills High, the wins, losses and struggles of two families from vastly different worlds — Compton and Beverly Hills — begin to collide. Inspired by the life of pro football player Spencer Paysinger.</p>",
//       "updated": 1684254496,
//       "_links": {
//         "self": { "href": "https://api.tvmaze.com/shows/34653" },
//         "previousepisode": { "href": "https://api.tvmaze.com/episodes/2530954" }
//       }
//     }
//   },
