import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

function SpeakerCardWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default SpeakerCardWrapper;
