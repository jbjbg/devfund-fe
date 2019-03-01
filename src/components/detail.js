import React from 'react';

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div id="detailModal">
          <h2>Request Details</h2>
          <p><span>Item:</span> {this.props.pitch.item}</p>
          <p><span>Cost:</span> ${this.props.pitch.price}</p>
          <p><span>Why:</span> {this.props.pitch.pitch}</p>

          <h3>Requester Details</h3>
          <div id="requester">
            <img src="http://placeimg.com/150/150/animals" alt={this.props.pitch.username}/>
            <p><span>Username:</span> {this.props.pitch.username}</p>
            <p><span>First Name:</span> {this.props.pitch.firstname}</p>
            <p><span>City:</span> {this.props.pitch.city}</p>
            <p><span>Bio:</span> {this.props.pitch.bio}</p>
            <p><span>GitHub:</span> <a href={this.props.pitch.github}>{this.props.pitch.github}</a></p>
            <p><span>LinkedIn:</span> <a href={this.props.pitch.linkedin}>{this.props.pitch.linkedin}</a></p>
            <p><span>Twitter:</span> <a href={this.props.pitch.twitter}>{this.props.pitch.twitter}</a></p>
            <p><span>Blog:</span> <a href={this.props.pitch.blog}>{this.props.pitch.blog}</a></p>
            <form action="https://dev-fund.herokuapp.com/pay" method="post">
            <button type="submit" value="Purchase">DevFund It!</button>
          </form>
          </div>
        </div>
      </>
    )
  }
}

export default Detail;