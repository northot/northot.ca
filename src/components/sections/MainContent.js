import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 88%, 0% 100%);
`;

const Section = () => {
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
    <ImageContainer>
      <Img
        // style={{ maxHeight: 400 }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </ImageContainer>
  );
};

export default Section;
