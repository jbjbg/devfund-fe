import React from "react";
import { Redirect } from "react-router-dom";
import { LoginContext } from "./auth/context";
import superagent from "superagent";

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
        <section className="hero" />
        <LoginContext.Consumer>
          {context => {
            return (
              <form id='myForm' onSubmit={(e) => this.submitForm(e, context)}>
                <label>
                  Upload:
                  <input type="file" name="pic" accept="image/*" />
                </label>
                <label>
                  Name:
                  <input
                    type="text"
                    name="firstname"
                    onChange={this.handleChange}
                    defaultValue={context.user.firstname}
                    required
                  />
                  <input
                    type="text"
                    name="lastname"
                    defaultValue={context.user.lastname}
                    required
                  />
                </label>
                <p>
                  Username: <span>{context.user.username}</span>
                </p>
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
                  <input
                    type="text"
                    name="address2"
                    defaultValue={context.user.address2}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    name="city"
                    defaultValue={context.user.city}
                    required
                  />
                  <input
                    type="text"
                    name="state"
                    defaultValue={context.user.state}
                    required
                  />
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
              </form>
            );
          }}
        </LoginContext.Consumer>
        {fireRedirect && <Redirect to={"/account"} />}
      </>
    );
  }
}

export default EditProfile;
