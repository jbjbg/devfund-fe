import React from 'react';

class EditProfile extends React.Component {
  // handleSubmit = form => {
    
  // }

  render() {
    return(
      <>
        <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" name="firstName" required />
              <input type="text" name="lastName" required />
            </label>
            <p>Username: <span>Username</span></p>
            <label>
              Email:
              <input type="text" name="email" required />
            </label>
            <label>
              Phone:
              <input type="text" name="phone" />
            </label>
            <label>
              Address:
              <input type="text" name="address1" required />
            </label>
            <label>
              <input type="text" name="address2" />
            </label>
            <label>
              <input type="text" name="city" required />
              <input type="text" name="state" required />
              <input type="text" name="zip" required />
            </label>
            <label>
              Gitbug:
              <input type="text" name="github"/>
            </label>
            <label>
              LinkedIn:
              <input type="text" name="linkedin" />
            </label>
            <label>
              Twitter:
              <input type="text" name="twitter" />
            </label>
            <label>
              Blog:
              <input type="text" name="blog" />
            </label>
            <label>
              About Me:
              <input type="textarea" name="aboutme" />
            </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }
}

export default EditProfile;