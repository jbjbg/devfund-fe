import React from 'react';
import { render } from "react-dom";
import request from "superagent";


import pitches from '../mock-data/pitches.json';

//limit characters on the Why - end with a ... to show more is available.

class Browse extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      users: [],
    }

    window.onscroll = () => {
      const {
        loadPitches,
        state: {
          error,
          isLoading,
          hasMore,
        },
      } = this;
    
      if(error || isLoading ||!hasMore) return;

      if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeigh){
        loadPitches();
      }
    }
  }

  componentWillMount(){
    this.loadPitches();
  }

  loadPitches = () => {
    this.setState({isLoading: true}, () => {
      request.get('url') // TODO: PUT IN THE URL FOR THE REQUEST. SOMETHING LIKE THIS: 'https://randomuser.me/api/?results=10'- see this post for the code I was working off of: https://alligator.io/react/react-infinite-scroll/ -------- Becca
        .then((results) => {
          const nextPitches = results.body.results.map(pitch => ({
            id: pitch.id,
            image: pitch.image,
            username: pitch.username,
            item: pitch.item,
            cost: pitch.cost,
            why: pitch.why
          }));

          this.setState({
            hasMore: (this.state.pitch.length < 100),
            isLoading: false,
            pitch: [
              ...this.state.pitch,
              ...nextPitches
            ]
          });
        })
        .catch((err) => {
          this.setState({
            error: err.message,
            isLoading: false
          });
        })
    });
  }

  render(){
    const {
      error,
      hasMore,
      isLoading,
      users,
    } = this.state;

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
    
}

export default Browse;