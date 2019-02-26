import React from 'react';
import pitches from '../mock-data/pitches.json';

//limit characters on the Why - end with a ... to show more is available.

const Browse = (props) => {
    return(
      <>
        <ul>{pitches.data.map((pitch, i) => 
          <li id={i}>
          <img src={pitch.image} alt="profile pic" />
          <p>{pitch.username}</p>
          <h4>{pitch.item} - {pitch.cost}</h4>
          <p>{pitch.why}</p>
          <button>Click Me!</button>
          </li> 
          )}
        </ul>
      </>
    )
  }

export default Browse;