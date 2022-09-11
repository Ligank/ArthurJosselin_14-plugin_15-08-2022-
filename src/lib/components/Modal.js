import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import "./modal.css";

function Modal({ show, title, titleColor, modalColor, modalText, modalTextColor, closeColor, closeColorX, borderColor, inputName1, inputName2, inputButtonText, handleClickInput, closeAction }) {

  let borderStyle = {border: "1px solid" + borderColor, backgroundColor: modalColor}
  
  const [isShown, setIsShown] = useState(false);

  useEffect(()=>{
    if (show === true) {
      setIsShown(true)
    }
}, [show]) 

function close() {
  setIsShown(false)
  closeAction()
}


  return (<div>
      {isShown &&<div className="modal-background">
        {inputName1 ? <div className="modal-box" style={borderStyle} >
        <button className="btn-closeModal" onClick={() => setIsShown(false)} style={{ color: closeColor }}>
          <span aria-hidden="true" className="closeModal" style={{ color: closeColorX }}>&times;</span>
        </button>
        {title && <h1 className="title-modal" style={{ color: titleColor }}>{title}</h1>}
        <form className="inputBoxModal">
          <div className="inputModal">
            <p>{inputName1}</p>
            <input type="text" id={inputName1} name={inputName1} className='inputCase'></input>
          </div>
          <div className="inputModal">
            <p>{inputName2}</p>
            <input type="text" id={inputName2} name={inputName2} className='inputCase'></input>
          </div>
          <button className="inputButtonModal" onClick={handleClickInput}>{inputButtonText ? inputButtonText : 'Confirm'}</button>
        </form>
        </div> 
        : 
        <div className="modal-box" style={borderStyle}>
        <button className="btn-closeModal" onClick={close} style={{ color: closeColor }}>
          <span aria-hidden="true" className="closeModal" style={{ color: closeColorX }}>&times;</span>
        </button>
        {title && <h1 className="title-modal" style={{ color: titleColor }}>{title}</h1>}
          <p className="text-modal" style={{ color: modalTextColor }}>{modalText}</p>
        </div>}
      </div>}
    </div>)              
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
  handleClickInput: PropTypes.func,
  closeAction: PropTypes.func
}

export default Modal
