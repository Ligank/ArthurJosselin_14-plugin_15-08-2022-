import React, { useState, useEffect } from "react";
import Modal from "../lib/components/Modal";

function App() {

  const [isShown, setIsShown] = useState(false);

  useEffect(()=>{
    setIsShown(false)
  }, [isShown]) 

  function handleClick() {
      setIsShown(true)
  }

  return <div className="box" style={{ width: 200, margin: "15px auto" }}>
          <h1>plugin modal</h1>
          <form action="#" id="create-employee">
                <div className='inputBox'>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" className='inputText' />
                </div>
                <button onClick={handleClick}>Confirm</button>
                <Modal buttonText={'Confirm'} modalText="Employee Created !" show={isShown}/>
            </form>
        </div>
}

export default App;