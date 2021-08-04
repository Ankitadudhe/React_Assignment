import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

function Demo(props) {
    return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={props.onClose}
        contentLabel={props.text}
      >
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}
export default Demo;