import React from 'react';
import {Route} from 'react-router-dom';

import Signup from './signup.js';
import Profile from './profile.js'
import Browse from './browse.js'
import Homepage from './homepage.js';
import Header from './header.js';
import Footer from './footer.js';
import Modal from './modules/modal.js';
import Login from './login.js';
import Pitch from './pitch.js';
import {When} from "./conditionals.js";
import LoginContext from './auth/context.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <LoginContext>
        <When condition={this.state.showModal}>
          <Modal title="Login to DevFund" close={this.toggleModal}>
            <Login />
          </Modal>
        </When>
        <Header toggleModal={this.toggleModal}/>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/request" component={Pitch} />
        <Route exact path="/account" component={Profile} />
        <Footer />
      </LoginContext>
    );
  }
}

export default App;
