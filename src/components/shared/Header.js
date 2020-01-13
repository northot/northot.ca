import React from "react";
import styled from "styled-components";
import Typography from "./Typography";
import { color } from "styled-system";

const BaseHeader = styled(Typography)`
  font-weight: bold;
  margin: 0;
  line-height: 1;
`;

export const H1 = styled(BaseHeader).attrs(props => ({
  as: "h1",
  ...props,
}))`
  font-size: 8vw;
`;

export const H2 = styled(BaseHeader).attrs(props => ({
  as: "h2",
}))`
  font-size: 7vw;
  margin: 0;
  margin-block: 0;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const H3 = styled(BaseHeader)`
  font-size: 68px;
`;

export const H4 = styled.h4``;

export const H5 = styled.h5``;

export const H6 = styled.h6``;
