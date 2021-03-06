import React from 'react';
import {Route} from 'react-router-dom';
import {When} from "./conditionals.js";
import LoginContext from './auth/context.js';

import Modal from './modules/modal.js';

import Signup from './signup.js';
import Profile from './profile.js';
import Browse from './browse.js';
import Homepage from './homepage.js';
import Header from './header.js';
import Footer from './footer.js';
import Login from './login.js';
import Pitch from './pitch.js';
import EditProfile from './editprofile.js';
import About from './about.js';
import Success from './success.js';
import Accepted from './accepted.js';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <LoginContext>
        <When condition={this.state.showModal}>
          <Modal title="Log In to DevFund" close={this.toggleModal}>
            <Login toggleModal={this.toggleModal} />
          </Modal>
        </When>
        <Header toggleModal={this.toggleModal}/>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/signup" render={() => <Signup closeModal={this.closeModal} />} />
        <Route exact path="/request" component={Pitch} />
        <Route exact path="/account" component={Profile} />
        <Route exact path="/editaccount" component={EditProfile} />
        <Route exact path="/about" component={About} />
        <Route exact path="/success" component={Success}></Route>
        <Route exact path="/accepted" component={Accepted}></Route>


        <Footer />
      </LoginContext>
    );
  }
}

export default App;
