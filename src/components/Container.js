import React from "react";

export default function Container({ children, py = "0%", px = "10%" }) {
  return (
    <div
      css={`
        padding: ${py} ${px};
      `}
    >
      {children}
    </div>
  );
}
