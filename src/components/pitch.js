import React from "react";
import { When, If, Then, Else } from "./conditionals.js";
import { Redirect } from "react-router-dom";
import { LoginContext } from "./auth/context.js";
import Modal from "./modules/modal.js";
import Login from "./login.js";
import superagent from 'superagent';

import "../styles/reset.scss";
import "../styles/base.scss";
import "../styles/pitch.scss";


class Pitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: 'default',
      fireRedirect: false,
      API: "http://dev-fund.herokuapp.com",
      showModal: false,
      pitch: {}
    };
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleShow = () => this.setState({ show: true });
  handleHide = () => this.setState({ show: false });

  handleSubmit = async (e, context) => {
    e.preventDefault();
    let pitch = {
      ...this.state.pitch,
      username: context.user.username,
      user_id: context.user._id,
      firstname: context.user.firstname,
      city: context.user.city,
      bio: context.user.bio,
      github: context.user.github,
      image: context.user.image,
      linkedin: context.user.linkedin,
      twitter: context.user.twitter,
      blog: context.user.blog
    }
    await this.setState({ fireRedirect: true, pitch })
    superagent
      .post(`${this.state.API}/api/pitch`)
      .send(this.state.pitch)
      .catch(console.error)
  };

  handleChange = e => {
    this.setState({pitch: {...this.state.pitch, [e.target.name]: e.target.value}})
    if(e.target.value === "other") {
      this.setState({ show: true })
    }
  };

  render() {
    const { fireRedirect } = this.state;

    return (
      <>
        <main id="pitchPage">
          <section className="hero" id="pitch">
          <h1>Make a Request</h1>
          <h3>DevFunders love to help!</h3>

          </section>
          <h2 id="formheader">What do you need DevFunded?</h2>
          <LoginContext.Consumer>
            {context => {
              return (
                <If condition={context.loggedIn}>
                  <Then>
                    <form onSubmit={e => this.handleSubmit(e, context)}>
                      <fieldset>
                        <label>Service Requested: </label>
                        <select
                          name="item"
                          onChange={this.handleChange}
                          required
                        >
                          <option value="default">Make a selection</option>
                          <option value="egghead">Egghead.io Membership</option>
                          <option value="udemy">Udemy.com Course</option>
                          <option value="plural">
                            Pluralsight.com Membership
                          </option>
                          <option value="other">Other</option>
                        </select>
                        <When condition={this.state.show}>
                          <label>Other: </label>
                          <input type="text" required />
                        </When>
                        <label>Cost: </label>
                        <input onChange={this.handleChange} name="price" type="number" step=".01" />
                        <label>Your Pitch:</label>
                        <textarea rows="5" cols="50" onChange={this.handleChange} name="pitch" />
                        <button type="submit">Submit</button>
                      </fieldset>
                    </form>
                    {fireRedirect && 
                      <Redirect to={"/accepted"} />}
                  </Then>
                  <Else>
                    <div id="loggedOut">
                      <p>Sign in to request DevFunding!</p>
                      <button onClick={this.toggleModal}>Sign In</button>
                    </div>
                    <When condition={this.state.showModal}>
                      <Modal title="Login to DevFund" close={this.toggleModal}>
                        <Login toggleModal={this.toggleModal}/>
                      </Modal>
                    </When>
                  </Else>
                </If>
              );
            }}
          </LoginContext.Consumer>
        </main>
      </>
    );
  }
}

export default Pitch;
