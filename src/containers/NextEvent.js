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
  /* margin-bottom: -25%; */

  @media (max-width: 768px) {
    padding: 2rem 7.5%;
    margin-bottom: 0;
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
      talks: allTalksJson {
        edges {
          node {
            tba
            name
            talk
            hidden
            image {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            company
            title
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
          february 27, 2020
        </Typography>
      </HeadingBox>
      <SpeakerCardWrapper>
        {data.talks.edges
          .filter(({ node }) => node.hidden !== true)
          .map(({ node }) => (
            <SpeakerCard key={node.title} {...node} />
          ))}
        <StyledButtonBox>
          <Button
            onClick={() => (window.location = "http://register.northot.ca")}
            p="0"
            color="white"
            arrowColor="red"
          >
            Register to Attend
          </Button>
        </StyledButtonBox>
      </SpeakerCardWrapper>
    </Wrapper>
  );
};

export default NextEvent;
