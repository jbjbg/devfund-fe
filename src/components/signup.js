import React from 'react';

class Signup extends React.Component {
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
          <fieldset>
            <legend>Personal Information:</legend>
            <label>
              First name:
              <input type="text" name="firstName" required />
            </label>
            <label>
              Last name:
              <input type="text" name="lastName" required />
            </label>
            <label>
              Email:
              <input type="text" name="email" required />
            </label>
            <label>
              Phone:
              <input type="text" name="phone" />
            </label>
            <label>
              Address 1:
              <input type="text" name="address1" required />
            </label>
            <label>
              Address 2:
              <input type="text" name="address2" />
            </label>
            <label>
              City:
              <input type="text" name="city" required />
            </label>
            <label>
              State:
              <input type="text" name="state" required />
            </label>
            <label>
              Zip:
              <input type="text" name="zip" required />
            </label>
          </fieldset>
          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }
}

export default Signup;