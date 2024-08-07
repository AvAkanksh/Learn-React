import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const [text,setText] = useState("This is the default Text");
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <textarea className="form-control" rows="8" id="myBox" value={text} onChange={handleOnChange}></textarea>
      <button className='btn btn-primary m-1' onClick={handleUpClick} >Convert to UpperCase</button>
      <button className='btn btn-primary m-1' onClick={handleLowerClick} >Convert to LowerCase</button>
    </div>


    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
