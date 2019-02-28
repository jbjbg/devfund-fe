import React from 'react';
import cookie from 'react-cookies';

export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
  constructor(props){
    super(props);
    // const qs = new URLSearchParams(location.search);
    const cookieToken = cookie.load('auth');
    const token = cookieToken || null;
    this.state = {
      // login: false,
      // toggleLogin: this.toggleLogin,
      loggedIn: !!token,
      token: token,
      login: this.login,
      logout: this.logout,
      user: {}
    };
  }

  setLoginState = loggedIn => {
    let token = cookie.load('auth');
    this.setState({loggedIn, token});
  }

  login = token => {
    cookie.save('auth', token);
    this.setLoginState(true);
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