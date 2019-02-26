import React from "react";

import '../styles/reset.scss';
import '../styles/homepage.scss';



class Homepage extends React.Component {
  render() {
    return (
      <>
      <main>
        <section id="hero">
          <h1>DevFund</h1>
          <button>Browse</button>
          <button>Request</button>
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
          <p>This is an item someone got</p>
          <p>This is another one</p>
        </section>
      </main>
      </>

    )
    
  }
}

export default Homepage;
