import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
  isOpen= {!!props.selectedOption}
  onRequestClose= {props.handleClearSelectedOption}
  contentLabel = "Selected Option"
  closeTimeoutMS={300}
  className="modal"
  >

    <h3 className="modal__title">Selected option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button
    className="button button__small"
    onClick={props.handleClearSelectedOption}
    >
    Okay!</button>
  </Modal>
);

export default OptionModal;