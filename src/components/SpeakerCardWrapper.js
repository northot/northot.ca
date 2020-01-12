import React from "react";
import styled, { css } from "styled-components";

const SpeakerCardWrapper = styled.div`
  width: 50%;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  display: flex;

  ${props =>
    props.second &&
    css`
      transform: translateY(25%);
    `}
`;

const SpeakerCardWrapperMain = ({ children }) => {
  const cols = React.Children.toArray(children).reduce(
    (acc, child, i) => {
      const index = i % 2;

      acc[index] = [...acc[index], child];
      return [...acc];
    },
    [[], []]
  );

  return (
    <div
      css={`
        display: flex;
        justify-content: center;
        margin: 0 auto;
        max-width: 1000px;
      `}
    >
      <SpeakerCardWrapper>{cols[0]}</SpeakerCardWrapper>
      <SpeakerCardWrapper second>{cols[1]}</SpeakerCardWrapper>
    </div>
  );
};

export default SpeakerCardWrapperMain;
