import React from 'react';

import '../../styles/modal.scss';

const Modal = props => {
  return (
    <div className="modal">
      <div>
        <header>
          <span className="title">{props.title}</span>
          <a onClick={props.close}>X</a>
        </header>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;