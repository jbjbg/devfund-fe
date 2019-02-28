import React from 'react';

import pitches from '../mock-data/pitches.json';
import {When} from "./conditionals.js";
import Modal from './modules/modal.js';
import Detail from './detail.js';



//limit characters on the Why - end with a ... to show more is available.

class Browse extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return(
      <>
        <When condition={this.state.showModal}>
          <Modal title="" close={this.toggleModal}>
            <Detail/>
          </Modal>
        </When>
        <ul>{pitches.data.map((pitch, i) => 
          <li key={i}>
          <img src={pitch.image} alt="profile pic" />
          <p>{pitch.username}</p>
          <h4>{pitch.item} - {pitch.cost}</h4>
          <p>{pitch.why}</p>
          <button onClick={this.toggleModal}>Click Me!</button>
          </li> 
          )}
        </ul>
      </>
    )}
}

export default Browse;
