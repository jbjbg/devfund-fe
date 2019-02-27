import React from 'react';

export const ModalContext = React.createContext();

class ModalProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    };
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };


  render(){
    return(
      <ModalContext.Provider value={this.state}>
        {this.props.children}
      </ModalContext.Provider>
    )
  }
}

export default ModalProvider;