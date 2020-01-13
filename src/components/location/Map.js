import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const MapWrapper = styled.div`
  position: relative;
  height: 100%;
`;

const MapLabel = styled.div`
  @media (min-width: 769px) {
    position: absolute;
    width: 100%;
    bottom: 0;
    color: white;
    font-weight: bold;
    background-color: rgba(231, 29, 36, 0.8);
    padding: 0.5rem;
  }

  @media (max-width: 768px) {
    font-weight: bold;
    font-size: 1.25rem;
    color: #404042;
    text-align: center;
    position: static;
    margin: 0 2rem;
    padding: 2rem 0;
    border-bottom: 1px solid #fc0009;
  }
`;

const Map = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "map.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <MapWrapper>
      <Img
        style={{ height: "100%" }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
      <MapLabel>
        Georgian College | 1 Georgian Drive | Barrie, ON L4M 4H8
      </MapLabel>
    </MapWrapper>
  );
};

export default Map;
