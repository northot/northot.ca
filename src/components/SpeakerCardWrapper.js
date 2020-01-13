import React from "react";
import styled, { css } from "styled-components";
import Carousel from "react-slick";
import Box from "./shared/Box";
import useMedia from "use-media";
import ChevronLeft from "../assets/chevron-left.svg";
import ChevronRight from "../assets/chevron-right.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slick-theme.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 850px;
  margin: 0 auto;
`;

const SpeakerCardWrapper = styled.div`
  width: 50%;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  display: flex;

  ${props =>
    props.first &&
    css`
      transform: translateY(-25%);
    `}
`;

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <ChevronRight />,
  prevArrow: <ChevronLeft />,
};

const SpeakerCardWrapperMain = ({ children }) => {
  const isMobile = useMedia({ maxWidth: "768px" });

  if (isMobile) {
    // const [...rest, last] = children;
    return (
      <>
        <Carousel {...carouselSettings}>{children.slice(0, -1)}</Carousel>
        {children.slice(-1)}
      </>
    );
  }

  const cols = React.Children.toArray(children).reduce(
    (acc, child, i) => {
      const index = i % 2;

      acc[index] = [...acc[index], child];
      return [...acc];
    },
    [[], []]
  );

  return (
    <Container>
      <SpeakerCardWrapper first>{cols[0]}</SpeakerCardWrapper>
      <SpeakerCardWrapper>{cols[1]}</SpeakerCardWrapper>
    </Container>
  );
};

export default SpeakerCardWrapperMain;
