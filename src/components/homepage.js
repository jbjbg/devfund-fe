import React from "react";
import { Link } from "react-router-dom";

import '../styles/reset.scss';
import '../styles/base.scss';
import '../styles/homepage.scss';



class Homepage extends React.Component {

  render() {
    return (
      <>
      <main>
        <section id="hero">
          <h1>DevFund</h1>
            <Link to="/browse">
          <button>
          Browse
          </button>
            </Link>
            <Link to="/request">
          <button>
          Request
          </button>
            </Link>
        </section>
        <section id="about">
          <h2>What it is</h2>
          <section id="aboutContent">
          <div></div>
            <p>
              Here is some information, Here is some information, Here is some information, Here is some information ,Here is some information ,Here is some information ,Here is some information Here is some information, Here is some informationHere is some informationHere is some informationHere is some informationHere is some information Here is some informationHere is some information Here is some informationHere is some information Here is some information Here is some information Here is some information Here is some information Here is some information Here is some informationHere is some informationHere is some information Here is some information 
            </p>
          </section>
        </section>
        <section id="recent">
          <h2>Recent Giving</h2>
          <section>
            <div>
              <img src={require("../assets/people/becca.jpg")} alt="becca"/>
              <img id="right" src={require("../assets/people/brent.jpg")} alt="brent"/>
            </div>
            <div id="info">
              <h4>Subscription to egghead.io - gifted by brenttech</h4>
              <p id="request">I'm a recent bootcamp grad and I'd love to continue my learning online. Having a subscription to egghead.io would be a huge help! -beccalee123</p>
            </div>
          </section>
          <section>
            <div>
              <img src={require("../assets/people/brent.jpg")} alt="brent"/>
              <img id="right" src={require("../assets/people/becca.jpg")} alt="becca"/>
            </div>
            <div id="info">
              <h4>Subscription to egghead.io - gifted by brenttech</h4>
              <p id="request">I'm a recent bootcamp grad and I'd love to continue my learning online. Having a subscription to egghead.io would be a huge help! -beccalee123</p>
            </div>
          </section>
          <section>
            <div>
              <img src={require("../assets/people/becca.jpg")} alt="becca"/>
              <img id="right" src={require("../assets/people/brent.jpg")} alt="brent"/>
            </div>
            <div id="info">
              <h4>Subscription to egghead.io - gifted by brenttech</h4>
              <p id="request">I'm a recent bootcamp grad and I'd love to continue my learning online. Having a subscription to egghead.io would be a huge help! -beccalee123</p>
            </div>
          </section>
        </section>
      </main>
      </>

    )
    
  }
}

export default Homepage;
