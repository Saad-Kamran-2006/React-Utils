import React from "react";

export default function About(props) {
  return (
    <div
      className="container"
      style={{ color: props.mode === "light" ? "black" : "white" }}
    >
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div
          className={`accordion-item text-${
            props.mode === "light" ? "dark" : "light"
          } bg-${props.mode === "light" ? "light" : "secondary"}`}
        >
          <h2 className="accordion-header">
            <button
              className={`accordion-button text-${
                props.mode === "light" ? "dark" : "light"
              } bg-${props.mode === "light" ? "light" : "dark"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              React-Utils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div
          className={`accordion-item text-${
            props.mode === "light" ? "dark" : "light"
          } bg-${props.mode === "light" ? "light" : "secondary"}`}
        >
          <h2 className="accordion-header">
            <button
              className={`accordion-button text-${
                props.mode === "light" ? "dark" : "light"
              } bg-${props.mode === "light" ? "light" : "dark"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              React-Utils is a free character counter tool that provides instant
              character count & word count statistics for given text.
              React-Utils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div
          className={`accordion-item text-${
            props.mode === "light" ? "dark" : "light"
          } bg-${props.mode === "light" ? "light" : "secondary"}`}
        >
          <h2 className="accordion-header">
            <button
              className={`accordion-button text-${
                props.mode === "light" ? "dark" : "light"
              } bg-${props.mode === "light" ? "light" : "dark"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body`}>
              This word counter software works in any web browsers such as{" "}
              <code>Chrome, Firefox, Internet Explorer, Safari, Opera.</code> It
              suits to count characters in{" "}
              <code>
                facebook, blog, books, excel document, pdf document, essays,
                etc.
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
