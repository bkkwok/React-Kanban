import React from "react";
import cn from "classnames";

export default function PriorityOption({ level, selected, togglePriority }) {
  const classes = cn("priority_circle", `priority_circle-${level}`, {
    "selected": selected === level
  });

  return <div className={classes} onClick={() => togglePriority(level)} />;
}
