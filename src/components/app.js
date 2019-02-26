import React from 'react';

// import Signup from './signup.js';
// import Login from './login.js';
// import Nav from './nav.js';
// import Profile from './profile.js'
// import Browse from './browse.js'
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
        {/* <Signup /> */}
        {/* <Login /> */}
        {/* <Profile /> */}
        <Homepage showModal={this.state.showModal} toggleModal={this.toggleModal} />
        <Footer />
      </>
    );
  }
}

export default App;
