import React, { Component } from "react";

const DEFAULT_HEIGHT = '20px';

class TextArea extends Component {
  constructor(props) {
    super(props);

    const { height } = props;

    this.state = {
      height: height || DEFAULT_HEIGHT
    }

    this.resizeTextArea = this.resizeTextArea.bind(this);
  }

  componentDidMount() {
    this.resizeTextArea();

    this.textArea.addEventListener("input", this.resizeTextArea, false);
  }

  componentWillUnmount() {
    this.textArea.removeEventListener("input", this.resizeTextArea, false);
  }

  resizeTextArea() {
    const { scrollHeight, scrollTop } = this.textArea;

    this.textArea.style.height = "auto";
    this.textArea.style.height = scrollHeight + "px";
    this.textArea.scrollTop = scrollHeight;
    window.scrollTo(window.scrollLeft, scrollTop + scrollHeight);
  }

  render() {
    return <textarea ref={el => (this.textArea = el)} {...this.props} />
  }
}

export default TextArea;
