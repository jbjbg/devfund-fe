import React from 'react';
import superagent from 'superagent';
import {When} from "./conditionals.js";
import Modal from './modules/modal.js';
import Detail from './detail.js';

import "../styles/reset.scss";
import "../styles/base.scss";
import "../styles/browse.scss";

//limit characters on the Why - end with a ... to show more is available.

class Browse extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      pitchList: [],
      API: 'https://dev-fund.herokuapp.com'
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   if(props.location.state === true) {
  //   this.getBulletin();
  //   return state;
  // }

  getBulletin = async () => {
    await superagent
    .get(`${this.state.API}/api/bulletin`)
    .then( res => {
      this.setState({pitchList: res.body.results})
    })
    .catch(console.error);
  }

  componentDidMount = () => {
    this.getBulletin();
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleClick = (e, pitch) => {
    this.setState({pitch})
    this.toggleModal()
  }

  render() {
    return(
      <>
        <main id="browsePage">
          <section className="hero" id="browse">
            <h1>DevFund a Request</h1>
            <h3>You can make a big difference!</h3>
          </section>
          <h2>All Pitches</h2>
          <When condition={this.state.showModal}>
            <Modal title="" close={this.toggleModal}>
              <Detail pitch={this.state.pitch}/>
            </Modal>
        </When>
        <ul>{this.state.pitchList.map((pitch, i) =>
          <li key={i}>
            <div id="photoAndName">
              <img src={pitch.image} alt="profile pic" />
              <p className="username">{pitch.username}</p>
            </div>
            <div id="pitch">
              <h4 className="pitchheader">{pitch.item} - ${pitch.price}</h4>
              <p>{pitch.pitch.slice(0, 150) + '...'}</p>
            </div>
            <button onClick={(e) => this.handleClick(e, pitch)}>Details</button>
          </li> 
            )}
          </ul>
        </main>
      </>
    )}
}

export default Browse;
