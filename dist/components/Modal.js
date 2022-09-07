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
  handleClickInput
}) {
  let borderStyle = {
    border: "1px solid" + borderColor,
    backgroundColor: modalColor
  };
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    if (show === true) {
      setIsShown(true);
    }
  }, [show]);
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
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "text-modal",
    style: {
      color: modalTextColor
    }
  }, modalText))));
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
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