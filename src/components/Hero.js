import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function Hero() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      style={{ minHeight: 300, maxHeight: 400 }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
}

export default Hero;
