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
  render() {
    return (
      <>
        <Header />
        {/* <Signup /> */}
        {/* <Login /> */}
        {/* <Nav /> */}
        {/* <Profile /> */}
        <Homepage />
        <Footer />
      </>
    );
  }
}

export default App;
