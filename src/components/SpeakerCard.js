import React from "react";

function SpeakerCard() {
  return (
    <article
      css={`
        position: relative;
        display: inline-block;
        overflow: hidden;
        border-radius: 10px;
        border: 4px solid white;
      `}
    >
      <img src="https://placeimg.com/450/370/people" />
      <div
        css={`
          opacity: 0.8;
          background-color: rgb(230, 30, 37);
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 0.5rem 1rem;
        `}
      >
        <h6
          css={`
            margin: 0;
            font-size: 1.25rem;
            display: flex;
            font-weight: 600;
            align-items: center;
            color: white;
          `}
        >
          <span>Jacob Amaral</span>
          <span
            css={`
              width: 2px;
              background-color: white;
              margin: 0 0.5rem;
              height: 1rem;
            `}
          />
          <span>We Trade HQ</span>
        </h6>
        <p
          css={`
            font-size: 1rem;
            margin: 0;
            color: white;
          `}
        >
          "Starting a lean tech company"
        </p>
      </div>
    </article>
  );
}

export default SpeakerCard;
