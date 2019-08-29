import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function Section() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "upcoming.jpg" }) {
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
      style={{ maxHeight: 400 }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
}

export default Section;
