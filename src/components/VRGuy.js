import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: absolute;
  width: 400px;
  top: -8rem;
  right: 0;
  overflow: hidden;
`;

const Image = styled(GatsbyImage)`
  right: -7.5rem;
  max-height: 700;

  @media (max-width: 768px) {
    display: none;
  }
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
      <Image
        {...props}
        imgStyle={{ objectFit: "contain" }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </ImageContainer>
  );
};

export default VRGuy;
