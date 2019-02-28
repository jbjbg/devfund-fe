import React from "react";
import data from "../mock-data/profile.json";
import { Link } from "react-router-dom";
import {LoginContext} from './auth/context.js';

class Profile extends React.Component{

  render() {
    return (
      <>
      <LoginContext.Consumer>
        {context => {
          return (
            {
              data.user.map((user, i) => (
              <div key="{i}">
                <img src={user.image} alt={user.username} />
                <p>
                  Name: {user.firstname} {user.lastname}
                </p>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Address: {user.address1}</p>
                <p>{user.address2}</p>
                <p>
                  {user.city}, {user.state} {user.zip}
                </p>
                <p>
                  Github: <a href={user.github}>{user.github}</a>
                </p>
                <p>
                  LinkedIn: <a href={user.linkedin}>{user.linkedin}</a>
                </p>
                <p>
                  Twitter: <a href={user.twitter}>{user.twitter}</a>
                </p>
                <p>
                  Blog: <a href={user.blog}>{user.blog}</a>
                </p>
                <p>About Me: {user.bio}</p>
              </div>
            ))}
           )
        }}
      </LoginContext.Consumer>
      <Link to="/editaccount">Edit</Link>
      </>
    )
  }
}

export default Profile;
