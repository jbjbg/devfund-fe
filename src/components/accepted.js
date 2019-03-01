import React from "react";
import { Redirect } from "react-router-dom";

import '../styles/reset.scss';
import '../styles/base.scss';
import '../styles/success.scss';

class Accepted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fireRedirect: false}
  }

  onClick = (e) => {
    e.preventDefault()
    this.setState({ fireRedirect: true })
  }

  render(){
    const { fireRedirect } = this.state;
    return(
      <>
        <main id="success">
          <h1>Request Submitted!</h1>
          <img src={require("../assets/dog2.gif")} alt="dog lying down and typing on laptop"/>
          <p>DevFunders are now seeing your request!</p>
          <button onClick={this.onClick}>Browse</button>
          {fireRedirect && (
            <Redirect to={'/browse'} />
          )}
        </main>
      </>
    )
  }
}

export default Accepted;