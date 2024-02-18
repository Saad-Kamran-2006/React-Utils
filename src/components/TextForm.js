import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    text.length > 0
      ? props.showAlert(
          "Text has been converted to Upper-Case successfully.",
          "success"
        )
      : props.showAlert("Please! Enter a valid text.", "warning");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    text.length > 0
      ? props.showAlert(
          "Text has been converted to Lower-Case successfully.",
          "success"
        )
      : props.showAlert("Please! Enter a valid text.", "warning");
  };
  const handlePascalClick = () => {
    let newText = text
      .split(" ")
      .map(
        (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
      )
      .join(" ");
    setText(newText);
    text.length > 0
      ? props.showAlert(
          "Text has been converted to Pascal-Case successfully.",
          "success"
        )
      : props.showAlert("Please! Enter a valid text.", "warning");
  };
  const handleSentenceClick = () => {
    const sentenceCase = () => {
      let sentence = text.split(". ");
      for (let i = 0; i < sentence.length; i++) {
        sentence[i] =
          sentence[i].charAt(0).toUpperCase() +
          sentence[i].slice(1).toLowerCase();
      }
      return sentence.join(". ");
    };
    setText(sentenceCase());
    text.length > 0
      ? props.showAlert(
          "Text has been converted to Sentence-Case successfully.",
          "success"
        )
      : props.showAlert("Please! Enter a valid text.", "warning");
  };
  const handleExtraClick = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    text.length > 0
      ? props.showAlert("Extra-Space has been removed.", "success")
      : props.showAlert("Please! Enter a valid text.", "warning");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    text.length > 0
      ? props.showAlert("Text copied to clipboard sucessfully.", "success")
      : props.showAlert("Please! Enter a valid text.", "warning");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    text.length > 0
      ? props.showAlert("Text has been removed.", "success")
      : props.showAlert("Please! Enter a valid text.", "warning");
  };
  const handleOnChange = (evt) => {
    setText(evt.target.value);
  };
  return (
    <>
      <div
        className="main-container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="mb-8">{props.heading}</h1>
        <div className="mb-3 text-container">
          <textarea
            className={`form-control text-${
              props.mode === "light" ? "black" : "light"
            } bg-${props.mode === "light" ? "light" : "secondary"}`}
            placeholder="Enter your text"
            value={text}
            onChange={handleOnChange}
            id="myTextBox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleUpClick}
        >
          Convert to Upper-Case
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleLowClick}
        >
          Convert to Lower-Case
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handlePascalClick}
        >
          Convert to Pascal-Case
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleSentenceClick}
        >
          Convert to Sentence-Case
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleExtraClick}
        >
          Remove Extra-Spaces
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          disabled={text.length === 0}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((word) => word.trim() !== "").length} words
          and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").filter((word) => word.trim() !== "").length}{" "}
          Minutes read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
};
