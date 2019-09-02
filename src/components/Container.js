import React from "react";

export default function Container({ children, py }) {
  return (
    <div
      css={`
        padding: ${py ? "10%" : "0"} 10%;
      `}
    >
      {children}
    </div>
  );
}
