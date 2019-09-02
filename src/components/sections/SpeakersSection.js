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
    <div
      css={`
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        clip-path: polygon(0 12%, 100% 0, 100% 100%, 0% 100%);
      `}
    >
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
  );
}

export default Section;
