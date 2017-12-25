import React from "react";

export default function Link(props) {
  const newProps = { className: "dropdown_link", ...props };

  return <div {...newProps}>{newProps.children}</div>;
}
