import superagent from "superagent";
import React from "react";
import { LoginContext } from "./auth/context.js";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      API: 'https://dev-fund.herokuapp.com'
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e, loginMethodFromContext) => {
    e.preventDefault();
    superagent
      .post(`${this.state.API}/signin`)
      .auth(this.state.username, this.state.password)
      .then(response => {
        let user = response.body;
        loginMethodFromContext(user);
      })
      .catch(console.error);
      this.props.toggleModal();
  };

  render() {
    return (
      <LoginContext.Consumer>
        {context => {
          return (
            <>
              <div id="login">
                <form onSubmit={e => this.handleSubmit(e, context.login)}>
                  <fieldset>
                    <label>
                      Username:
                      <input
                        type="text"
                        name="username"
                        onChange={this.handleChange}
                        required
                      />
                    </label>
                    <label>
                      Password:
                      <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}
                        required
                      />
                    </label>
                  </fieldset>
                  <button type="submit" value="Submit"> Submit </button>
                </form>
                <section>
                  <p>Don't have an account yet?</p>
                  <button>
                    <Link to="/signup">Sign Up!</Link>
                  </button>
                </section>
              </div>
            </>
          );
        }}
      </LoginContext.Consumer>
    );
  }
}

export default Login;
