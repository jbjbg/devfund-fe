import React from 'react';
import cookie from 'react-cookies';
import superagent from 'superagent';

export const LoginContext = React.createContext();

const URL = "https://dev-fund.herokuapp.com";

class LoginProvider extends React.Component {
  constructor(props){
    super(props);
    const cookieToken = cookie.load('auth');
    const token = cookieToken || null;
    this.state = {
      loggedIn: !!token,
      token: token,
      login: this.login,
      logout: this.logout,
      user: {},
    };
  }

  getUser = async () => {
    let result = await superagent
      .get(`${URL}/user/${this.state.user.id}`)
      .auth(this.state.token)

    console.log('This is the user', result.body)
    this.setState({user: result.body})
  }

  setLoginState = loggedIn => {
    let token = cookie.load('auth');
    this.setState({loggedIn, token});
  }

  login = user => {
    cookie.save('auth', user.token);
    this.setState({user: {id: user.id} });
    this.setLoginState(true);
    this.getUser();
  }

  logout = () => {
    cookie.remove('auth');
    this.setLoginState(false);
  }

  // toggleLogin = () => {
  //   this.setState({login: !this.state.login});
  // }

  render(){
    return(
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    )
  }
}

export default LoginProvider;