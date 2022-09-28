import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import "./modal.css";

function Modal({
  show,
  title,
  titleColor,
  modalColor,
  modalText,
  modalTextColor,
  closeColor,
  closeColorX,
  borderColor,
  inputName1,
  inputName2,
  inputButtonText,
  handleClickInput,
  closeAction
}) {
  let borderStyle = {
    border: "1px solid" + borderColor,
    backgroundColor: modalColor
  };
  const [isShown, setIsShown] = useState(false); //show the modal when show is true

  useEffect(() => {
    if (show === true) {
      setIsShown(true);
    }
  }, [show]); //remove modal and if closeAction in not blank, make an action

  function close() {
    setIsShown(false);

    if (closeAction) {
      closeAction();
    }
  }
  /**
   * depending on whether inputName1 is empty or not, the visual changes automatically
   */


  return /*#__PURE__*/React.createElement("div", null, isShown && /*#__PURE__*/React.createElement("div", {
    className: "modal-background"
  }, inputName1 ? /*#__PURE__*/React.createElement("div", {
    className: "modal-box",
    style: borderStyle
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-closeModal",
    onClick: () => setIsShown(false),
    style: {
      color: closeColor
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "closeModal",
    style: {
      color: closeColorX
    }
  }, "\xD7")), title && /*#__PURE__*/React.createElement("h1", {
    className: "title-modal",
    style: {
      color: titleColor
    }
  }, title), /*#__PURE__*/React.createElement("form", {
    className: "inputBoxModal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inputModal"
  }, /*#__PURE__*/React.createElement("p", null, inputName1), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: inputName1,
    name: inputName1,
    className: "inputCase"
  })), /*#__PURE__*/React.createElement("div", {
    className: "inputModal"
  }, /*#__PURE__*/React.createElement("p", null, inputName2), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: inputName2,
    name: inputName2,
    className: "inputCase"
  })), /*#__PURE__*/React.createElement("button", {
    className: "inputButtonModal",
    onClick: handleClickInput
  }, inputButtonText ? inputButtonText : 'Confirm'))) : /*#__PURE__*/React.createElement("div", {
    className: "modal-box",
    style: borderStyle
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-closeModal",
    onClick: close,
    style: {
      color: closeColor
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "closeModal",
    style: {
      color: closeColorX
    }
  }, "\xD7")), title && /*#__PURE__*/React.createElement("h1", {
    className: "title-modal",
    style: {
      color: titleColor
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-modal",
    style: {
      color: modalTextColor
    }
  }, modalText))));
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  //always a state equal to false by default.
  title: PropTypes.string,
  //Title of the modal (like 'Login' before input).
  titleColor: PropTypes.string,
  //Color of the title.
  modalColor: PropTypes.string,
  //Color of background.
  modalText: PropTypes.string,
  //Text of the modal (like 'Confirmed !').
  modalTextColor: PropTypes.string,
  //Color of text.
  closeColor: PropTypes.string,
  //Color of the close circle.
  closeColorX: PropTypes.string,
  //Color of the X close.
  borderColor: PropTypes.string,
  //Color of the border of the modal.
  inputName1: PropTypes.string,
  //Name of first input.
  inputName2: PropTypes.string,
  //Name of second input.
  inputButtonText: PropTypes.string,
  //Text of the button of the form.
  handleClickInput: PropTypes.func,
  //Action to do when form is send.
  closeAction: PropTypes.func //Action to do when modal is closed.

};
export default Modal;