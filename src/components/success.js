import React from "react";
import { Redirect } from "react-router-dom";

import '../styles/reset.scss';
import '../styles/base.scss';
import '../styles/success.scss';

class Success extends React.Component {
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
          <h1>Success!</h1>
          <img src={require("../assets/dog.gif")} alt="dog typing at computer"/>
          <p>Thank you for DevFunding!</p>
          <button onClick={this.onClick}>Browse</button>
          {fireRedirect && (
            <Redirect to={'/browse'} />
          )}
        </main>
      </>
    )
  }
}

export default Success;