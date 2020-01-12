import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: absolute;
  width: 400px;
  top: -8rem;
  right: 0;
  overflow: hidden;
`;

const VRGuy = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "vr-guy.png" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <ImageContainer>
      <Img
        {...props}
        imgStyle={{ objectFit: "contain" }}
        style={{ right: "-7.5rem", maxHeight: 700 }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </ImageContainer>
  );
};

export default VRGuy;
