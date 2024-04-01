import React, { useState } from "react";

export const Textis = (props) => {
  const upperClick = () => {
    let up = text.toUpperCase();
    setText(up);
    props.ShowAlert("Converted to Upper case", "success")
  };

  const lowClick = () => {
    let low = text.toLowerCase();
    setText(low);
    props.ShowAlert("Converted to lower case", "success")

  };

  const clearText = () => {
    let clt = "";
    setText(clt);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const extraSpaceRemove=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2 className="mb-2">{props.heading} </h2>
        <div className="mb-2">
          <button disabled={text.length===0} className="btn btn-danger mb-3" onClick={clearText}>
            Clear Text
          </button>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#c7d5e4",
              Color: props.mode === "white" ? "white" : "dark",
            }}
            rows="8"
            placeholder="Enter Text"
          />
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={upperClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={lowClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary" onClick={extraSpaceRemove}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
        {text.length===0?0:text.split(/\s+/).filter(Boolean).length} words and {text.trim(" ").length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter(Boolean).length} minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview it here"}
        </p>
      </div>
    </>
  );
};
