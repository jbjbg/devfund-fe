import superagent from 'superagent';
import React from 'react';
import { LoginContext } from './auth/context.js';
import {When} from './conditionals.js';
import { Link } from "react-router-dom";

const API = 'https://dev-fund.herokuapp.com';

class Login extends React.Component {
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e, loginMethodFromContext) => {
    e.preventDefault();
    superagent
      .post(`${API}/signin`)
      .auth(this.state.username, this.state.password)
      .then(response => {
        let token = response.text;
        loginMethodFromContext(token);
      })
      .catch(console.error);
  };

  logout = (e, logoutMethodFromProvider) => {
    logoutMethodFromProvider();
  };

  render() {
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Login Information:</legend>
            <label>
              Username:
              <input type="text" name="username" required />
            </label>
            <label>
              Password:
              <input type="text" name="password" required />
            </label>
          </fieldset>
          <input type="submit" value="Submit" />
        </form>
        <section>
          <p>Don't have an account yet?</p>
          <button>
            <Link to="/signup">
            Sign Up!
            </Link>
          </button>
        </section>
      </>
    )
  }
}

export default Login;