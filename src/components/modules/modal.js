import React from "react";

import "../../styles/modal.scss";

class Modal extends React.Component {
  componentDidMount() {
    document.body.classList.add('modal-open');
  }

  componentWillUnmount() {
    document.body.classList.remove('modal-open');
  }

  render() {
    return (
      <>
        <div className="modal">
          <div>
            <header>
              <span className="title">{this.props.title}</span>
              <p onClick={this.props.close}>X</p>
            </header>
            <div>{this.props.children}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
