import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function VRGuy(props) {
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
    <Img
      {...props}
      style={{ maxHeight: 400 }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
}

export default VRGuy;
