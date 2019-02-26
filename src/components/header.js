import React from 'react';
import "../styles/base.scss";
import "../styles/header.scss";


class Header extends React.Component {
  render() {
    return (
      <>
        <nav>
          <a href="#" id="logo">DF</a>
          <a href="#">Request</a>
          <a href="#">Browse</a>
          <a href="#">Sign In</a>
        </nav>
      </>
    );
  }
}

export default Header;