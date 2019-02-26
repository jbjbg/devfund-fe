import React from 'react';
import {Route} from 'react-router-dom';

import Signup from './signup.js';
import Profile from './profile.js'
import Browse from './browse.js'
import Homepage from './homepage.js';
import Header from './header.js';
import Footer from './footer.js';



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
      <>
        <Header toggleModal={this.toggleModal}/>
        <Route exact path="/" render={() => <Homepage showModal={this.state.showModal} toggleModal={this.toggleModal} />}/>
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/account" component={Profile} />
        
        
        <Footer />
      </>
    );
  }
}

export default App;
