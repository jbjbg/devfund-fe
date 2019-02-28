import React from 'react';
import data from '../mock-data/profile.json';
import {Redirect} from 'react-router-dom';

let user = {...data.user[0]};

class EditProfile extends React.Component {
  constructor () {
    super();
    this.state = {
      fireRedirect: false
    }
  }

  submitForm = (e) => {
    e.preventDefault()
    this.setState({ fireRedirect: true })
  }

  render() {

    const { fireRedirect } = this.state;

    return(
      <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

        <form onSubmit={this.submitForm}>
            <label>
              Name:
              <input type="text" name="firstName" defaultValue={user.firstname} required />
              <input type="text" name="lastName" defaultValue={user.lastname} required />
            </label>
            <p>Username: <span>Username</span></p>
            <label>
              Email:
              <input type="text" name="email" defaultValue={user.email} required />
            </label>
            <label>
              Phone:
              <input type="text" name="phone" defaultValue={user.phone} />
            </label>
            <label>
              Address:
              <input type="text" name="address1" required defaultValue={user.address1} />
            </label>
            <label>
              <input type="text" name="address2" defaultValue={user.address2} />
            </label>
            <label>
              <input type="text" name="city" defaultValue={user.city} required />
              <input type="text" name="state" defaultValue={user.state} required />
              <input type="text" name="zip" defaultValue={user.zip} required />
            </label>
            <label>
              GitHub:
              <input type="text" name="github" defaultValue={user.github}/>
            </label>
            <label>
              LinkedIn:
              <input type="text" name="linkedin" defaultValue={user.linkedin} />
            </label>
            <label>
              Twitter:
              <input type="text" name="twitter" defaultValue={user.twitter} />
            </label>
            <label>
              Blog:
              <input type="text" name="blog" defaultValue={user.blog} />
            </label>
            <label>
              About Me:
              <textarea name="aboutme" rows="5" cols="50"  defaultValue={user.bio} />
            </label>
          <button type="submit">
              Submit
          </button>
        </form>
        {fireRedirect && (
          <Redirect to={'/account'}/>
        )}
      </>
    )
  }
}

export default EditProfile;