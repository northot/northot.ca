import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const OuterContainer = styled.article`
  transform: scale(0.9);
  height: 50vh;
  /* height: 50%; */
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
  font-size: 1.1rem;
  font-weight: 600;
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

const Image = styled(Img)`
  filter: grayscale(100%);
  max-height: 400px;
  height: 50vh;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const SpeakerCard = ({ name, company, talk, image, tba }) => {
  console.log(tba);
  return (
    <OuterContainer>
      <Image fluid={image.childImageSharp.fluid} />
      <TextContainer>
        {tba ? (
          <Title>To Be Determined</Title>
        ) : (
          <>
            <Title>
              {name} - {company}
            </Title>
            <TalkTitle>"{talk}"</TalkTitle>
          </>
        )}
      </TextContainer>
    </OuterContainer>
  );
};

export default SpeakerCard;
