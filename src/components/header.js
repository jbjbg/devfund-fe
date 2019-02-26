import React from 'react';
import "../styles/base.scss";
import "../styles/header.scss";
import {If, Then, Else, When, Unless} from "./conditionals.js";
import Login from './login.js';
import Modal from './modules/modal.js';



class Header extends React.Component { 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <nav>
          <a href="#" id="logo">DF</a>
          <div>
            <a href="#">Request</a>
            <a href="#">Browse</a>
            <a href="#">About</a>
            <a href="#">Account</a>
            <If condition="1">
              <Then>
                <p onClick={this.props.toggleModal}>Sign In</p>
              </Then>
              <Else if condition="2">
                <p>Sign Out</p>
              </Else>
            </If>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;