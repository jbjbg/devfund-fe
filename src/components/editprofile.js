import React from "react";
import { Redirect } from "react-router-dom";
import { LoginContext } from "./auth/context";
import superagent from "superagent";

import "../styles/reset.scss";
import "../styles/base.scss";
import "../styles/editprofile.scss";

class EditProfile extends React.Component {
  constructor() {
    super();
    this.state = { 
      fireRedirect: false,
      API: 'http://dev-fund.herokuapp.com',
      data: {}
    };
  }

  submitForm = (e, context) => {
    e.preventDefault();
    this.setState({ fireRedirect: true });
    // console.log('context', context);
    console.log('state', this.state.data);
    // superagent
    // .put()
    // .set('Authorization', `Bearer ${context.token}`)
    // .send(data)
  };

  handleChange = e => {
    this.setState({data: {[e.target.name]: e.target.value }});
  };

  render() {
    const { fireRedirect } = this.state;

    return (
      <>
      <main id="editProfile">
      <h1>Edit Your Account</h1>
        <LoginContext.Consumer>
          {context => {
            return (
              <form id='myForm' onSubmit={(e) => this.submitForm(e, context)}>
                <fieldset>
                <label>
                  Upload:
                  <input type="file" name="pic" accept="image/*" />
                </label>
                <label>
                  First Name:
                  <input
                    type="text"
                    name="firstname"
                    onChange={this.handleChange}
                    defaultValue={context.user.firstname}
                    required
                  />
                  </label>
                  <label>
                    Last Name:
                  <input
                    type="text"
                    name="lastname"
                    defaultValue={context.user.lastname}
                    required
                  />
                  </label>
                <label>
                  Email:
                  <input
                    type="text"
                    name="email"
                    defaultValue={context.user.email}
                    required
                  />
                </label>
                <label>
                  Phone:
                  <input
                    type="text"
                    name="phone"
                    defaultValue={context.user.phone}
                  />
                </label>
                <label>
                  Address:
                  <input
                    type="text"
                    name="address1"
                    required
                    defaultValue={context.user.address1}
                  />
                </label>
                <label>
                  Address 2:
                  <input
                    type="text"
                    name="address2"
                    defaultValue={context.user.address2}
                  />
                </label>
                <label>
                  City:
                  <input
                    type="text"
                    name="city"
                    defaultValue={context.user.city}
                    required
                  />
                </label>
                <label>
                  State:
                  <input
                    type="text"
                    name="state"
                    defaultValue={context.user.state}
                    required
                  />
                </label>
                <label>
                  Zip Code:
                  <input
                    type="text"
                    name="zip"
                    defaultValue={context.user.zip}
                    required
                  />
                </label>
                <label>
                  GitHub:
                  <input
                    type="text"
                    name="github"
                    defaultValue={context.user.github}
                  />
                </label>
                <label>
                  LinkedIn:
                  <input
                    type="text"
                    name="linkedin"
                    defaultValue={context.user.linkedin}
                  />
                </label>
                <label>
                  Twitter:
                  <input
                    type="text"
                    name="twitter"
                    defaultValue={context.user.twitter}
                  />
                </label>
                <label>
                  Blog:
                  <input
                    type="text"
                    name="blog"
                    defaultValue={context.user.blog}
                  />
                </label>
                <label>
                  About Me:
                  <textarea
                    name="aboutme"
                    rows="5"
                    cols="50"
                    defaultValue={context.user.bio}
                  />
                </label>
                <button type="submit">Submit</button>
                </fieldset>
              </form>
            );
          }}
        </LoginContext.Consumer>
        {fireRedirect && <Redirect to={"/account"} />}
        </main>
      </>
    );
  }
}

export default EditProfile;
