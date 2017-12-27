import React from "react";

export default function DropdownLink(props) {
  const newProps = { className: "dropdown_link", ...props };

  return <div {...newProps}>{newProps.children}</div>;
}
