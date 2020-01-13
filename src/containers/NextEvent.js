import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { H2 as Header } from "../components/shared/Header";
import Button from "../components/shared/Button";
import Box from "../components/shared/Box";
import Typography from "../components/shared/Typography";
import BackgroundImage from "gatsby-background-image";
import SpeakerCard from "../components/SpeakerCard";
import SpeakerCardWrapper from "../components/SpeakerCardWrapper";

const Wrapper = styled(BackgroundImage)`
  padding: 10rem 7.5%;
  margin-top: -7.5vw;
  clip-path: polygon(0 calc(0% + 7.5vw), 100% 0, 100% 100%, 0% 100%);

  @media (max-width: 768px) {
    padding: 2rem 7.5%;
    margin-top: 0;
    clip-path: none;
  }
`;

const StyledButtonBox = styled(Box)`
  margin-left: 5%;

  @media (max-width: 768px) {
    padding-top: 2rem;
    margin: 0;
    text-align: center;
  }
`;

const HeadingBox = styled(Box)`
  margin-bottom: 5rem;
  width: 70%;
  margin-left: auto;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const NextEvent = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "upcoming.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper id="speakers" fluid={data.placeholderImage.childImageSharp.fluid}>
      <HeadingBox>
        <Header textAlign="right">
          <Box as="span" color="white">
            next NorthOT event
          </Box>
          <Box as="span" color="red">
            .
          </Box>
        </Header>
        <Typography
          textAlign="right"
          fontWeight="300"
          color="white"
          fontSize="2rem"
        >
          august 31, 2019
        </Typography>
      </HeadingBox>
      <SpeakerCardWrapper>
        <SpeakerCard
          name="Jacob Amaral"
          title="Starting a lean tech company"
          company="WeTradeHQ"
        />
        <SpeakerCard
          name="Suha Abdullah"
          title="Back for your future!"
          company="Shoof"
        />
        <SpeakerCard
          name="Steedan Crowe"
          title="How to thrive as a freelancer"
          company="44 North Digital Marketing"
        />
        <SpeakerCard
          name="Steedan Crowe"
          title="How to thrive as a freelancer"
          company="44 North Digital Marketing"
        />
        <StyledButtonBox>
          <Button p="0" color="white" arrowColor="red">
            Register to Attend
          </Button>
        </StyledButtonBox>
      </SpeakerCardWrapper>
    </Wrapper>
  );
};

export default NextEvent;