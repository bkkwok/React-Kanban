import React, { Component } from "react";

class TextArea extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.element.addEventListener("input", function() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
      this.scrollTop = this.scrollHeight;
      window.scrollTo(window.scrollLeft, this.scrollTop + this.scrollHeight);
    });
  }

  render() {
    return <textarea ref={el => (this.element = el)} {...this.props} />;
  }
}

export default TextArea;
