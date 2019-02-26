import React from 'react';

class Login extends React.Component {
  //login state?

  // handleSubmit = form => {
    
  // }

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
      </>
    )
  }
}

export default Login;