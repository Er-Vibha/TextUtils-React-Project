import React, { useState } from "react";

export const Textis = (props) => {
  const upperClick = () => {
    // console.log("Clicked")
    let up = text.toUpperCase();
    setText(up);
  };

  const lowClick = () => {
    let low = text.toLowerCase();
    setText(low);
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
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-4">
          <button className="btn btn-danger mb-3" onClick={clearText}>
            Clear Text
          </button>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              Color: props.mode === "white" ? "dark" : "white",
            }}
            rows="8"
            placeholder="Enter Text"
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={upperClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={lowClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
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
