import React from "react";
import styled, { css } from "styled-components";
import { color, space, layout } from "styled-system";
import Arrow from "../../assets/arrow.svg";
import { useTheme } from "../../hooks";

const PlainButton = styled.button`
  appearance: none;
  border: none;
  background-color: transparent;
  text-align: left;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  ${space}
  ${layout}
`;

const ButtonText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  padding-left: 0.5rem;

  ${color}
`;

const Button = ({ children, color, arrowColor, ...props }) => {
  const theme = useTheme();
  return (
    <PlainButton {...props}>
      <Arrow fill={arrowColor || color || theme.palette.primary.main} />
      <ButtonText color={color}>{children}</ButtonText>
    </PlainButton>
  );
};

export default Button;
