import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./modal.css";

function Modal({
  buttonText,
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
  onClick
}) {
  let borderStyle = {
    border: "1px solid" + borderColor,
    backgroundColor: modalColor
  };
  const [isShown, setIsShown] = useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setIsShown(true)
  }, buttonText), isShown && /*#__PURE__*/React.createElement("div", {
    className: "modal-background"
  }, inputName1 ? /*#__PURE__*/React.createElement("div", {
    className: "modal-box",
    style: borderStyle
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-close",
    onClick: () => setIsShown(false),
    style: {
      color: closeColor
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "close",
    style: {
      color: closeColorX
    }
  }, "\xD7")), title && /*#__PURE__*/React.createElement("h1", {
    className: "title-modal",
    style: {
      color: titleColor
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "inputBox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input"
  }, /*#__PURE__*/React.createElement("p", null, inputName1), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: inputName1,
    name: inputName1,
    className: "inputCase"
  })), /*#__PURE__*/React.createElement("div", {
    className: "input"
  }, /*#__PURE__*/React.createElement("p", null, inputName2), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: inputName2,
    name: inputName2,
    className: "inputCase"
  })), /*#__PURE__*/React.createElement("button", {
    className: "inputButton",
    onClick: onClick
  }, inputButtonText ? inputButtonText : 'Confirm'))) : /*#__PURE__*/React.createElement("div", {
    className: "modal-box",
    style: borderStyle
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-close",
    onClick: () => setIsShown(false),
    style: {
      color: closeColor
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    className: "close",
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
  buttonText: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  modalColor: PropTypes.string,
  modalText: PropTypes.string,
  modalTextColor: PropTypes.string,
  closeColor: PropTypes.string,
  closeColorX: PropTypes.string,
  borderColor: PropTypes.string,
  inputName1: PropTypes.string,
  inputName2: PropTypes.string,
  inputButtonText: PropTypes.string,
  onClick: PropTypes.string
};
export default Modal;