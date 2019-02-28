import React from "react";
import { When, If, Then, Else } from "./conditionals.js";
import { Redirect } from "react-router-dom";
import { LoginContext } from "./auth/context.js";

import "../styles/reset.scss";
import "../styles/base.scss";
import "../styles/pitch.scss";

import Modal from "./modules/modal.js";
import Login from "./login.js";

class Pitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: 'default',
      fireRedirect: false,
      showModal: false
    };
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleShow = () => this.setState({ show: true });
  handleHide = () => this.setState({ show: false });

  handleSubmit = e => {
    e.preventDefault();
    //add post route for creating submit
    this.setState({ fireRedirect: true });
  };

  handleChange = e => {
    let value = e.target.value;
    let show = value === "other" ? true : false;
    this.setState({ value, show });
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
                    <form onSubmit={this.handleSubmit}>
                      <fieldset>
                        <label>Service Requested: </label>
                        <select
                          name="yourrequest"
                          value={this.state.value}
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
                        <input type="number" step=".01" />
                        <label>Your Pitch:</label>
                        <input type="textarea" />
                        <button type="submit">Submit</button>
                      </fieldset>
                    </form>
                    {fireRedirect && <Redirect to={"/browse"} />}
                  </Then>
                  <Else>
                    <p>Sign in in order to get DevFunded!</p>
                    <button onClick={this.toggleModal}>Sign In</button>
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
