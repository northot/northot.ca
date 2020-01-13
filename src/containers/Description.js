import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import VRGuy from "../components/VRGuy";
import Button from "../components/shared/Button";
import Box from "../components/shared/Box";
import Typography from "../components/shared/Typography";
import Container from "../components/Container";

const Background = styled(BackgroundImage)`
  padding: 15vw 30vw 10vw 10%;

  @media (max-width: 768px) {
    padding: 40vw 7.5% 2rem;
  }
`;

const StyledTypography = styled(Typography)`
  color: #4b4b4d;
  line-height: 1.75;
  font-size: 1.1rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

const Description = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "grid-pattern.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Background
      id="description"
      fluid={data.placeholderImage.childImageSharp.fluid}
    >
      <VRGuy />
      <StyledTypography>
        NorthOT is a tech focused meet up in the Barrie and surrounding area.
        NorthOT wants to encourage tech North of Toronto by allowing people of
        all experience the ability to interact, learn, educate and make
        connections with companies and individuals.
      </StyledTypography>
      <StyledTypography>
        NorthOT is intended for both beginners and experts, to be able to share
        wisdom and ask questions without judgement. The ability to hone skills
        from presentational, to conversational.
        <strong
          css={`
            font-weight: 600;
          `}
        >
          {" "}
          To better ourselves and those around us.
        </strong>
      </StyledTypography>
      <Box display="flex" justifyContent="flex-end">
        <Button>Explore Upcoming Events</Button>
      </Box>
    </Background>
  );
};

export default Description;
