import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

function Demo(props) {
    return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={props.onClose}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        // style={customStyles}
        contentLabel={props.text}
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button> */}
        <div>I am a modal</div>
      </Modal>
    </div>
  );
}
export default Demo;