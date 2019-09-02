import React from "react";
import styled from "styled-components";
import { H1 } from "./shared/Header";

const OutlinedText = styled.span`
  color: transparent;
  -webkit-text-stroke: 3px white;
`;

const RegularText = styled.span`
  color: ${props => props.color || `#404042`};
`;

const MainH1 = styled(H1)`
  text-transform: uppercase;
  position: absolute;
  bottom: -8vw;
  margin: 0;
  line-height: 0.9;
  padding-left: 5%;
`;

function MainTag() {
  return (
    <MainH1>
      <OutlinedText>Barrie's Largest</OutlinedText>
      <br />
      <RegularText>Tech meetup</RegularText>
      <RegularText color="#e71e24">.</RegularText>
    </MainH1>
  );
}

export default MainTag;
