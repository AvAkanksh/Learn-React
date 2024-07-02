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
    <div>
      <h1>{props.heading}</h1>
      <textarea className="form-control" rows="8" id="myBox" value={text} onChange={handleOnChange}></textarea>
      <button className='btn btn-primary m-1' onClick={handleUpClick} >Convert to UpperCase</button>
      <button className='btn btn-primary m-1' onClick={handleLowerClick} >Convert to LowerCase</button>
    </div>
  )
}
