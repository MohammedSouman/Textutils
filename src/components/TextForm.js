import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("")
    const upperCase = () => {
        setText(text.toUpperCase());
        props.showAlert("Text converted to uppercase", "success")
    }
    const lowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Text converted to lowercase", "success")
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const clearText = () => {
        setText("");
        props.showAlert("Text is cleared", "success")
    }

    const copyText = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard", "success")
    }

    const removeExtraSpaces = () => {
      let newText = text.split(/[ ] +/)
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed", "success")
    }

  return (
    <div>
      <div className="container my-3" style={props.myStyle}>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
            <h2>{props.heading}</h2>
        </label>
        <textarea className={`form-control text-${props.mode.textColor}`} style={props.myStyle} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        <button  disabled={text.length === 0} className={`btn btn-primary m-2 bg-${props.mode.bgColor} border-dark border-2 text-${props.mode.textColor}`} onClick={upperCase}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className={`btn btn-primary m-2 bg-${props.mode.bgColor} border-dark border-2 text-${props.mode.textColor}`} onClick={lowerCase}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className={`btn btn-primary m-2 bg-${props.mode.bgColor} border-dark border-2 text-${props.mode.textColor}`} onClick={clearText}>Clear Text</button>
        <button disabled={text.length === 0} className={`btn btn-primary m-2 bg-${props.mode.bgColor} border-dark border-2 text-${props.mode.textColor}`} onClick={copyText}>Copy Text</button>
        <button disabled={text.length === 0} className={`btn btn-primary m-2 bg-${props.mode.bgColor} border-dark border-2 text-${props.mode.textColor}`} onClick={removeExtraSpaces}>Remove extra spaces</button>
        <div className="container my-3">
            <h2>Text Summary</h2> 
            <p>{text.split(/\s+/).filter((t) => {return t.length>0}).length} words {text.length} characters</p>
            <p>{text.split(/\s+/).filter((t) => {return t.length>0}).length * 0.008} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
      </div>
      </div>
    </div>
  );
}
