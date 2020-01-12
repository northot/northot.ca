import React from "react";
import styled from "styled-components";

const BaseHeader = styled.h1`
  font-weight: bold;
`;

export const H1 = styled(BaseHeader).attrs(props => ({
  as: "h1",
}))`
  font-size: 8vw;
`;

export const H2 = styled(BaseHeader).attrs(props => ({
  as: "h2",
}))`
  font-size: 77px;
`;

export const H3 = styled(BaseHeader)`
  font-size: 68px;
`;

export const H4 = styled.h4``;

export const H5 = styled.h5``;

export const H6 = styled.h6``;
