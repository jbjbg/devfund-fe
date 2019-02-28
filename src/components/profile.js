import React from "react";
import data from "../mock-data/profile.json";
import { Link } from "react-router-dom";
import { LoginContext } from "./auth/context.js";

class Profile extends React.Component {
  render() {
    return (
      <>
        <LoginContext.Consumer>
          {context => {
            console.log('context in profile',context);
            let user = {...context.user};
            console.log('I am the user', context.user)
            return (
              <div>
                <p>
                  Name: {`${user.firstname} ${user.lastname}`}
                </p>
              </div>
            )
          }}
        </LoginContext.Consumer>
        <Link to="/editaccount">Edit</Link>
      </>
    );
  }
}

export default Profile;
