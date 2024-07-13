import React, {useState} from 'react'
// import PropTypes from 'prop-types'

//array destructuring
// this is called a hook which allows us to use the properties of class based component. here text is the variable where the value will be stored. text variable will basicly be equal to the first parameter of the array that will be returned by usestate. and setText gets equal to the the second parameter
export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        // setText(text.toUpperCase()); // Convert the text to uppercase
        props.showAlert("Converted to uppercase","success")
    }

    const handleLoClick = () =>{
        console.log("Lowercase was clicked:\n"+ text );
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success")
    }

    const handleExtSpaces = ()=>{
        console.log("Extra spaces was clicked:\n"+ text );
        let pattern = /[ ]+/g;
          if(pattern.test(text)){
          console.log("Extra spaces found!");
          let newText = text.replace(pattern, ' ');
          console.log(newText);
          setText(newText);
          props.showAlert("Extra spaces removed!","success")
        }
        // let newText = text.split(/[ ]+/);
        // setText(newText.join(" "));
        //or
        // let newText = text.split(/[ ]+/).join(" ");
        //or
        else {
          console.log("No extra spaces found!")
        }
    }

    const handleClearClick = () =>{
      console.log("Clear was clicked:\n"+ text );
      let newText = '';
      setText(newText);
      props.showAlert("Text cleared","success")
    }

    const handleCopy = () =>{
      console.log("Copy was clicked:\n"+ text );
      let text1 = document.getElementById("myBox");
      navigator.clipboard.writeText(text1.value)
        .then(() => {
          console.log('Text copied to clipboard successfully');
          props.showAlert("Text copied successfully!!!","success")
          })
        .catch(err => {
          console.error('Failed to copy text: ', err);
          });
          // navigator is a global JavaScript object available in web browsers. It provides information about the browser environment and its capabilities. The navigator object contains properties and methods that allow web applications to query and interact with various aspects of the browser and the device it's running on.

          // The clipboard is a sub-object of navigator that represents the system clipboard of the user's device. It provides methods to read from and write to the clipboard. This is particularly useful for web applications that need to facilitate copying and pasting content programmatically, enhancing user experience and productivity.

          // The writeText() method of the clipboard object writes the given text to the clipboard.Like many modern JavaScript APIs dealing with potentially slow or system-dependent operations, writeText operates asynchronously. This means it returns a Promise.
      }

    const handleOnChange = (event) => {
        console.log(event);
        console.log("Handleonchange function");
        setText(event.target.value) //event is the event that has occurred.target refers to the element in which we have made chnages or the targeted element and value is used to access the value property of the input element.(many input elements have value property that stores the current value that the particular element holds. so it basically sets the current value of the set making it changeable.)
         // Update the text state with the new value
    }
    
    const countNonSpaceCharacters = (str) => {
      return str.replace(/\s+/g, '').length;
    }
    // \s+ is a regular expression that matches any whitespace character (including spaces, tabs,
    const [text, setText] = useState('');//state and useState is a hook

    return (
      <>
      <div className='container' style={props.mode === 'light' ? {color: 'black'} : {color: '#ccdbcc'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea 
            className="form-control"
            value={text}
            onChange={handleOnChange} // Attach the handleOnChange function to onChange event
            id="myBox"
            style={{
              backgroundColor: props.mode === 'dark' ? '#2d3338': 'rgb(64, 133, 30)', 
              color: '#ccdbcc'
            }} //style is used to change the background color of the textarea

            name="exampleTextarea" // Added name attribute
            rows="10"
          ></textarea>
        </div>
        <div className="buttons" >
        <button className="btn" onClick={handleUpClick} style={props.mode === 'light' ? {color: '#ccdbcc', backgroundColor: '#0b400d'} : {color: '#ccdbcc' , backgroundColor: 'black'}}>Convert to Uppercase</button>

        <button className="button btn" onClick={handleLoClick} style={props.mode === 'light' ? {color: '#ccdbcc', backgroundColor: '#0b400d'} : {color: '#ccdbcc' , backgroundColor: 'black'}}>Convert to Lowercase</button>

        <button className="button btn" onClick={handleClearClick} style={props.mode === 'light' ? {color: '#ccdbcc', backgroundColor: '#0b400d'} : {color: '#ccdbcc' , backgroundColor: 'black'}}>Clear</button>

        <button className="button btn" onClick={handleCopy} style={props.mode === 'light' ? {color: '#ccdbcc', backgroundColor: '#0b400d'} : {color: '#ccdbcc' , backgroundColor: 'black'}}>Copy Text</button>

        <button className="button btn" onClick={handleExtSpaces} style={props.mode === 'light' ? {color: '#ccdbcc', backgroundColor: '#0b400d'} : {color: '#ccdbcc' , backgroundColor: 'black'}}>Remove Extra WhiteSpaces</button>
        </div>
      </div>
      <div className="container my-4" style={props.mode === 'light' ? {color: 'black'} : {color: '#ccdbcc'}}>
        <h1>Your text summary</h1>
        <p>{text.length === 0 ? 0 : text.split(' ').filter(word => word.length > 0).length} words, {countNonSpaceCharacters(text)} characters</p>
        <p>{text.split(" ").length === 1 && text.length === 0 ? 0 : 0.008 *text.split(' ').filter(word => word.length > 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length === 0 ? 'Enter something to preview': text}</p>
        {/* .classer$*10 */}
      </div>
      </>
    );
}