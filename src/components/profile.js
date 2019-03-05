import React from "react";
import { Redirect } from "react-router-dom";
import { LoginContext } from "./auth/context.js";

import "../styles/reset.scss";
import "../styles/base.scss";
import "../styles/profile.scss";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fireRedirect: false };
  }

  onClick = e => {
    e.preventDefault();
    this.setState({ fireRedirect: true });
  };

  componentDidMount() {
    consol
  }

  render() {
    const { fireRedirect } = this.state;

    return (
      <LoginContext.Consumer>
        {context => {
          return (
            <main id="profilePage">
              <h1>Your Account</h1>
              <>
                <div id="profile">
                  <img
                    src="http://placeimg.com/150/150/animals"
                    alt={context.user.username}
                  />
                  <p>
                    Name: {context.user.firstname} {context.user.lastname}
                  </p>
                  <p>Username: {context.user.username}</p>
                  <p>Email: {context.user.email}</p>
                  <p>Phone: {context.user.phone}</p>
                  <p>Address: {context.user.address1}</p>
                  <p>{context.user.address2}</p>
                  <p>
                    {context.user.city}, {context.user.state} {context.user.zip}
                  </p>
                  <p>
                    Github: <a href={context.user.github}>{context.user.github}</a>
                  </p>
                  <p>
                    LinkedIn: <a href={context.user.linkedin}>{context.user.linkedin}</a>
                  </p>
                  <p>
                    Twitter: <a href={context.user.twitter}>{context.user.twitter}</a>
                  </p>
                  <p>
                    Blog: <a href={context.user.blog}>{context.user.blog}</a>
                  </p>
                  <p>About Me: {context.user.bio}</p>
                </div>
                <div id="button">
                  <button onClick={this.onClick}>Edit Profile</button>
                </div>
              </>
            </main>
          );
        }}
        {fireRedirect && <Redirect to={"/editaccount"} />}
      </LoginContext.Consumer>
    );
  }
}

export default Profile;
