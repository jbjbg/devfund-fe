import React from 'react';

import '../../styles/modal.scss';

const Modal = props => {
  return (
    <div className="modal">
      <div>
        <header>
          <span className="title">{props.title}</span>
          <p onClick={props.close}>X</p>
        </header>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;