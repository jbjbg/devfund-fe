import React from 'react';
import {When} from './conditionals.js'
import '../styles/reset.scss';
import '../styles/base.scss';
import '../styles/pitch.scss';

class Pitch extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      show: false,
      value: null
    }
  }

  handleShow = () => this.setState({show: true})
  handleHide = () => this.setState({show: false})

  handleSubmit = () => {
    var num = 1;
  }

  handleChange = (e) => {
    let value = e.target.value;
    let show = value === 'other' ? true : false;
    this.setState({value, show})
  }

  render() {
    return(
      <>
      <main id="pitchPage">
        <section class="hero" id="pitch">
          <h1>Make a Request</h1>
          <h3>DevFunders love to help!</h3>
        </section>
          <h2 id="formheader">What do you need DevFunded?</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>Service Requested: </label>
            <select name="yourrequest" value={this.state.value} onChange={this.handleChange} required>
              <option value="default">Make a selection</option>
              <option value="egghead">Egghead.io Membership</option>
              <option value="udemy">Udemy.com Course</option>
              <option value="plural">Pluralsight.com Membership</option>
              <option value="other">Other</option>
            </select>
            <When condition={this.state.show}>
              <label>Other: </label>
              <input type="text" required></input>
            </When>
            <label>Cost: </label>
            <input type="number" step=".01"></input>
            <label>Your Pitch:</label>
            <input type="textarea"></input>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </main>
      </>
    )
  }
}

export default Pitch;