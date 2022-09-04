import React, { useState } from "react";
import PropTypes from 'prop-types'
import "./modal.css";

function Modal({ buttonText, title, titleColor, modalColor, modalText, modalTextColor, closeColor, closeColorX, borderColor, inputName1, inputName2, inputButtonText, onClick}) {

  let borderStyle = {border: "1px solid" + borderColor, backgroundColor: modalColor}
  
  const [isShown, setIsShown] = useState(false);

  return (<div>
    <button onClick={() => setIsShown(true)}>{buttonText}</button>
      {isShown &&<div className="modal-background">
        {inputName1 ? <div className="modal-box" style={borderStyle} >
        <button className="btn-close" onClick={() => setIsShown(false)} style={{ color: closeColor }}>
          <span aria-hidden="true" className="close" style={{ color: closeColorX }}>&times;</span>
        </button>
        {title && <h1 className="title-modal" style={{ color: titleColor }}>{title}</h1>}
        <div className="inputBox">
          <div className="input">
            <p>{inputName1}</p>
            <input type="text" id={inputName1} name={inputName1} className='inputCase'></input>
          </div>
          <div className="input">
            <p>{inputName2}</p>
            <input type="text" id={inputName2} name={inputName2} className='inputCase'></input>
          </div>
          <button className="inputButton" onClick={onClick}>{inputButtonText ? inputButtonText : 'Confirm'}</button>
        </div>
        </div> 
        : 
        <div className="modal-box" style={borderStyle}>
        <button className="btn-close" onClick={() => setIsShown(false)} style={{ color: closeColor }}>
          <span aria-hidden="true" className="close" style={{ color: closeColorX }}>&times;</span>
        </button>
        {title && <h1 className="title-modal" style={{ color: titleColor }}>{title}</h1>}
          <p className="text-modal" style={{ color: modalTextColor }}>{modalText}</p>
        </div>}
      </div>}
    </div>)              
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
}

export default Modal