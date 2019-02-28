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
        <section className="hero" id="homepage">
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
          <div>
          <div><img src={require("../assets/charity.png")} alt="helping hands"/></div>
            <p>
            DevFund helps fund learning resources for new developers looking to break into the industry. It's an easy way for new devs to request the resources they need to learn to code, and for folks looking to give back to help fund them. DevFund was built to help grow the developer community and make giving back to it a little easier.
            </p>
          </div>
          </section>
        </section>
        <section id="recent">
          <h2>Recent Giving</h2>
          <section>
            <div>
              <img src={require("../assets/people/brent.jpg")} alt="brent"/>
              <img id="right" src={require("../assets/people/becca.jpg")} alt="becca"/>
            </div>
            <div id="info">
              <h4>Subscription to egghead.io - gifted by beccalee123</h4>
              <p id="request">I'm a recent bootcamp grad and I'd love to continue my learning online. Having a subscription to egghead.io would be a huge help! -brenttech</p>
            </div>
          </section>
          <section>
            <div>
              <img src={require("../assets/people/jon.jpeg")} alt="jon"/>
              <img id="right" src={require("../assets/people/jake.jpeg")} alt="jake"/>
            </div>
            <div id="info">
              <h4>Subscription to Udemy - gifted by 1anderson2jacob</h4>
              <p id="request">I'm a new developer with a background in CS looking to improve my coding skills. I love data structures and algorithms, and would like to take some courses to help me figure out how to utilize them in daily programming. -jondiquattro</p>
            </div>
          </section>
          <section>
            <div>
              <img src={require("../assets/people/becca.jpg")} alt="becca"/>
              <img id="right" src={require("../assets/people/george.jpeg")} alt="george"/>
            </div>
            <div id="info">
              <h4>React Rally Conference Ticket - gifted by georgeraymond </h4>
              <p id="request">I'm new developer looking to make some connections and continue my learning in the React community. I'm currently searching for my first position, so funds are tight, but I think this conference would be a great opportunity to help me break into the industry. -beccalee123</p>
            </div>
          </section>
        </section>
      </main>
      </>

    )
    
  }
}

export default Homepage;
