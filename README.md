# Plugin-modal-ligank library of React components created using `create-react-app`.

A plugin to automate the creation of a modal that can be used as validation or form with many parameters, they are not all required.
## Documentation

### Parameters :

##### buttonText : color of the button that opens the modal.
##### title: Title of the modal (like 'Login' before input).
##### titleColor: Color of the title.
##### modalColor: Color of background.
##### modalText: Text of the modal (like 'Confirmed !').
##### modalTextColor: Color of text.
##### closeColor: Color of the close circle.
##### closeColorX: Color of the X close.
##### borderColor: Color of the border of the modal.
##### inputName1: Name of first input.
##### inputName2: Name of second input.
##### inputButtonText: Text of the button of the form.
##### handleClick: Action to do when form is send.


## Installation

Install plugin-modal-ligank with npm

```bash
  npm i plugin-modal-ligank
```
## How to use

```bash
import {Modal} from "plugin-modal-ligank"

function handleClick() {
  console.log("hello world")
}

  <div>
    <Modal buttonText={''} modalText="" handleClick={handleClick}/>
  </div>
```


You can pass a function in handleClick.
    
## Authors

- [@Ligank](https://github.com/Ligank)

