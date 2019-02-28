import React from "react";
import "../styles/base.scss";
import "../styles/header.scss";
import { When } from "./conditionals.js";
import { Link } from "react-router-dom";
import { LoginContext } from "./auth/context.js";

class Header extends React.Component {

  logout = (e, logoutMethodFromProvider) => {
    logoutMethodFromProvider();
  };

  render() {
    return (
      <LoginContext.Consumer>
        {context => {
          return (
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
                  <When condition={context.loggedIn}>
                    <li>
                      <Link to="/request">Request</Link>
                    </li>
                  </When>
                  <li>
                    <Link to="/browse">Browse</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <When condition={context.loggedIn}>
                    <li>
                      <Link to="/account">Account</Link>
                    </li>
                  </When>
                  <When condition={!context.loggedIn}>
                    <li className="signin" onClick={this.props.toggleModal}>
                      Sign In
                    </li>
                  </When>
                  <When condition={context.loggedIn}>
                    <li
                      className="signin"
                      onClick={e => this.logout(e, context.logout)}
                    >
                      Sign Out
                    </li>
                  </When>
                </div>
              </ul>
            </nav>
          );
        }}
      </LoginContext.Consumer>
    );
  }
}

export default Header;
