import React from "react";

export default function Container({ children }) {
  return (
    <div
      css={`
        padding: 0 10%;
      `}
    >
      {children}
    </div>
  );
}
