import React from 'react';

class Profile extends React.Component{

  render() {
    return(
      <>
        <img src={require("../images/brent.jpg")} alt="Brent Woodward smoking a lovely tobacco pipe. So dashing." />
        <p>Name: <span>Brent</span><span>Woodward</span></p>
        <p>Username: <span>Username</span></p>
        <p>Email: <span>Brent@email.com</span></p>
        <p>Phone: <span>555-555-5555</span></p>
        <p>Address: <span>144 Riverside Way SW</span></p>
        <p><span>Cityville, TX 44442</span></p>
        <p>Github: <span>Brent</span></p>
        <p>LinkedIn: <span>Brent</span></p>
        <p>Twitter: <span>@Brent</span></p>
        <p>Blog: <span>www.thisisablog.brent</span></p>
        <p>About Me:
          <span>
          The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brothers keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.
          </span>
        </p>
        <form onSubmit={this.handleEditSubmit}>
          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }
}

export default Profile;
