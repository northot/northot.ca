import React from "react";
import styled from "styled-components";
import { H2 as Header } from "../components/shared/Header";
import Needle from "../assets/compass-needle.svg";
import Box from "../components/shared/Box";
import Button from "../components/shared/Button";

const Background = styled.section`
  overflow: hidden;
  position: relative;
  background-color: #e71d24;
  padding: 10rem 7.5%;
  margin-top: -7.5vw;
  clip-path: polygon(0 calc(0% + 7.5vw), 100% 0, 100% 100%, 0% 100%);

  @media (max-width: 768px) {
    margin-top: 0;
    padding: 4rem 7.5%;
    clip-path: polygon(0 0%, 100% 0, 100% 100%, 0% 100%);
  }
`;

const NeedleWrapper = styled(Box)`
  position: absolute;
  height: 120%;
  right: 10%;
  top: -10%;
  z-index: -1;

  @media (max-width: 768px) {
    padding: 0 5%;
    right: 0;
    height: 30rem;
    top: -5rem;
    left: 0;
    z-index: -1;
  }
`;

const TitleWrapper = styled.div`
  max-width: 70%;

  @media (max-width: 768px) {
    max-width: 100%;
    /* z-index: 1; */
  }
`;

const BecomeSpeaker = () => (
  <Background>
    <NeedleWrapper>
      <Needle height="100%" width="100%" fill="#eb494d" />
    </NeedleWrapper>
    <TitleWrapper>
      <Header my={0} color="white">
        become a speaker. <Button color="white">Get Started</Button>
      </Header>
    </TitleWrapper>
  </Background>
);

export default BecomeSpeaker;
