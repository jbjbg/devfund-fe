import React from 'react';

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2>Request Details</h2>
        <p>Item: {this.props.pitch.item}</p>
        <p>Cost: ${this.props.pitch.cost}</p>
        <p>Why: {this.props.pitch.why}</p>

        <h2>Requester Details</h2>
        <img src={this.props.pitch.profileImage} alt={this.props.pitch.username}/>
        <p>username: {this.props.pitch.username}</p>
        <p>firstname: {this.props.pitch.firstname}</p>
        <p>city: {this.props.pitch.city}</p>
        <p>bio: {this.props.pitch.bio}</p>
        <p>github: <a href={this.props.pitch.github}>{this.props.pitch.github}</a></p>
        <p>LinkedIn: <a href={this.props.pitch.linkedin}>{this.props.pitch.linkedin}</a></p>
        <p>Twitter: <a href={this.props.pitch.twitter}>{this.props.pitch.twitter}</a></p>
        <p>Blog: <a href={this.props.pitch.blog}>{this.props.pitch.blog}</a></p>
        <form action="https://dev-fund.herokuapp.com/pay" method="post">
        <button type="submit" value="Purchase">DevFund It!</button>
        </form>
      </>
    )
  }
}

export default Detail;