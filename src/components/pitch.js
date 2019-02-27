import React from 'react';
import {When} from './conditionals.js'

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
  }

  handleChange = (e) => {
    let value = e.target.value;
    let show = value === 'other' ? true : false;
    this.setState({value, show})
  }

  render() {
    return(
      <>
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <span>Service Requested: </span>
          <select name="yourrequest" value={this.state.value} onChange={this.handleChange} required>
            <option value="default">Make a selection</option>
            <option value="egghead">Egghead.io Membership</option>
            <option value="udemy">Udemy.com Course</option>
            <option value="plural">Pluralsight.com Membership</option>
            <option value="other">Other</option>
          </select>
          <When condition={this.state.show}>
            <span>Other: </span>
            <input type="text" required></input>
          </When>
          <span>Cost: </span>
          <input type="number" step=".01"></input>
          <span>Your Pitch:</span>
          <input type="textarea"></input>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      </>
    )
  }
}

export default Pitch;