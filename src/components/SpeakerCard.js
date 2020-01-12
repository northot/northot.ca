import React from "react";

import styled from "styled-components";

const OuterContainer = styled.article`
  transform: scale(0.9);
  height: 50%;
  width: 100%;
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 10px;
  border: 4px solid white;
`;

const TextContainer = styled.div`
  opacity: 0.8;
  background-color: rgb(230, 30, 37);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 1rem;
`;

const Title = styled.h6`
  margin: 0;
  font-size: 1.25rem;
  display: flex;
  font-weight: 600;
  align-items: center;
  color: white;
`;

const Divider = styled.span`
  width: 2px;
  background-color: white;
  margin: 0 0.5rem;
  height: 1rem;
`;

const TalkTitle = styled.p`
  font-size: 1rem;
  margin: 0;
  color: white;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const SpeakerCard = () => {
  return (
    <OuterContainer>
      <Image src="https://placeimg.com/450/370/people" />
      <TextContainer>
        <Title>
          <span>Jacob Amaral</span>
          <Divider />
          <span>We Trade HQ</span>
        </Title>
        <TalkTitle>"Starting a lean tech company"</TalkTitle>
      </TextContainer>
    </OuterContainer>
  );
};

export default SpeakerCard;
