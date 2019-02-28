import React from 'react';
import jwt from 'jsonwebtoken';
import PropTypes from 'prop-types';

import { LoginContext } from './context.js';
import {When} from '../conditional.js';

class Auth extends React.Component {
  render() {
    return (
      <LoginContext.Consumer>
        {context => {
          let user = context.token ? jwt.verify(context.token, 'foobar') : {};
          let okToRender = context.loggedIn && (user !== {});

          return <When condition={okToRender}>{this.props.children}</When>;
        }}
      </LoginContext.Consumer>
    );
  }
}

Auth.propTypes = {
  capability: PropTypes.string.isRequired,
};

export default Auth;
