import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 850px;
  margin: 0 auto;
`;

const SpeakerCardWrapper = styled.div`
  width: 50%;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  display: flex;

  ${props =>
    props.first &&
    css`
      transform: translateY(-25%);
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
    <Container>
      <SpeakerCardWrapper first>{cols[0]}</SpeakerCardWrapper>
      <SpeakerCardWrapper>{cols[1]}</SpeakerCardWrapper>
    </Container>
  );
};

export default SpeakerCardWrapperMain;
