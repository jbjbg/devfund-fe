import React from 'react';
import pitches from '../mock-data/pitches.js';

class Browse extends React.Component{
  render(){
    return(
      <div>
        <a href={pitches.profile}><img src={require('../assets/brent.jpg')} /></a>

      </div>
    )
  }
}

export default Browse;