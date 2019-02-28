import React from 'react';
import superagent from 'superagent';
import {When} from "./conditionals.js";
import Modal from './modules/modal.js';
import Detail from './detail.js';



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

  componentDidMount = () => {
    //run a superagent getAll request
    superagent
    .get(`${this.state.API}/api/bulletin`)
    .then( res => {
      this.setState({pitchList: res.body.results})
    })
    .catch(console.error);
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
        <When condition={this.state.showModal}>
          <Modal title="" close={this.toggleModal}>
            <Detail pitch={this.state.pitch}/>
          </Modal>
        </When>
        <ul>{this.state.pitchList.map((pitch, i) =>
          <li key={i}>
          <img src={pitch.data[0].profileImage} alt="profile pic" />
          <p>{pitch.data[0].username}</p>
          <h4>{pitch.data[0].item} - {pitch.data[0].cost}</h4>
          <p>{pitch.data[0].why.slice(0, 150) + '...'}</p>
            <button onClick={(e) => this.handleClick(e, pitch.data[0])}>Click Me!</button>
          </li> 
          )}
        </ul>
      </>
    )}
}

export default Browse;
