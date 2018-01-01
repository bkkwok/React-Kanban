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

  setCursorAtEnd = e => {
    const el = e.target;
    // If this function exists... (IE 9+)
    if(el.setSelectionRange) {
      // Double the length because Opera is inconsistent about whether a carriage return is one character or two.
      const len = el.value.length * 2;
      // Timeout seems to be required for Blink
      setTimeout(function() {
        el.setSelectionRange(len, len);
      }, 1)
    } else {
      // As a fallback, replace the contents with itself
      // Doesn't work in Chrome, but Chrome supports setSelectionRange
      const val = el.value;
      el.value = '';

      setTimeout(function() {
        el.value = val;
      }, 1)
    }

    // Scroll to the bottom, in case we're in a tall textarea
    // (Necessary for Firefox and Chrome)
    this.scrollTop = 999999;
  }

  render() {
    return <textarea onFocus={this.setCursorAtEnd} ref={el => (this.textArea = el)} {...this.props} />
  }
}

export default TextArea;
