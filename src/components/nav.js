import React from 'react';
import Modal from './modules/modal.js';
import Login from './login.js';

// Should be a separate component, but I'm lazy
const If = props => {
  return props.condition ? props.children : null;
};

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <div className="App">
        <h1 onClick={this.toggleModal}>Login</h1>
        <If condition={this.state.showModal}>
          <Modal title="Login to DevFund" close={this.toggleModal}>
            <Login />
          </Modal>
        </If>
      </div>
    );
  }
}

export default Nav;