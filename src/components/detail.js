import React from 'react';
import pitchData from '../mock-data/pitches.json';
import profileData from '../mock-data/profile.json';

let profile = profileData.user[0];
let pitch = pitchData.data[0];

class Detail extends React.Component {

  render() {
    return(
      <>
        <h2>Request Details</h2>
        <p>Item: {pitch.item}</p>
        <p>Cost: ${pitch.cost}</p>
        <p>Why: {pitch.why}</p>

        <h2>Requester Details</h2>
        <img src={profile.image} alt={profile.username}/>
        <p>username: {profile.username}</p>
        <p>firstname: {profile.firstname}</p>
        <p>city: {profile.city}</p>
        <p>bio: {profile.bio}</p>
        <p>github: <a href={profile.github}>{profile.github}</a></p>
        <p>LinkedIn: <a href={profile.linkedin}>{profile.linkedin}</a></p>
        <p>Twitter: <a href={profile.twitter}>{profile.twitter}</a></p>
        <p>Blog: <a href={profile.blog}>{profile.blog}</a></p>
      </>
    )
  }
}

export default Detail;