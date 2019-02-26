import React from 'react';
import "../styles/base.scss";
import "../styles/header.scss";
import {If, Then, Else, When, Unless} from "./conditionals.js";
import { Link } from "react-router-dom";



class Header extends React.Component { 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <nav>
          <ul>
          <li>
            <Link to="/" id="logo">
              DF
            </Link>
          </li>
          </ul>
          <ul>
          <div>
          <li>
            <Link to="/request">
              Request
            </Link>
          </li>
          <li>
            <Link to="/browse">
              Browse
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/account">
              Account
            </Link>
          </li>
            <If condition="1">
              <Then>
                <li class="signin" onClick={this.props.toggleModal}>Sign In</li>
              </Then>
              <Else if condition="2">
                <li class="signin">Sign Out</li>
              </Else>
            </If>
          </div>
          </ul>
        </nav>
      </>
    );
  }
}

export default Header;