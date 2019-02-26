import React from 'react';
import "../styles/base.scss";
import "../styles/header.scss";
import {If, Then, Else, When, Unless} from "./conditionals.js";

class Header extends React.Component {
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
                <a href="#">Sign In</a>
              </Then>
              <Else if condition="2">
                <a href="#">Sign Out</a>
              </Else>
            </If>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;