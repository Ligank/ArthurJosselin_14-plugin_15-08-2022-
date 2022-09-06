import Modal from "../lib/components/Modal";

function App() {

  function handleClick(e) {
    e.preventDefault()
  }

  return <div className="box" style={{ width: 200, margin: "15px auto" }}>
          <h1>plugin modal</h1>
          <Modal buttonText={'confirm'} title="Login" modalText="Employee Created !" inputName1='test' inputName2='test2' handleClick={handleClick}/>
        </div>
}

export default App;