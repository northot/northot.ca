import React from "react";
import styled from "styled-components";
import { H2 as Header } from "../shared/Header";

const Background = styled.section`
  background-color: #fc0009;
`;

const BecomeSpeaker = () => (
  <Background>
    <Header>Become a speaker</Header>
  </Background>
);

export default BecomeSpeaker;
