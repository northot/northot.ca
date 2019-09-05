import React from "react";
import styled from "styled-components";
import Arrow from "../../assets/arrow.svg";
import { useTheme } from "../../hooks";

const PlainButton = styled.button`
  appearance: none;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const ButtonText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  padding-left: 0.5rem;
`;

const Button = ({ children }) => {
  const theme = useTheme();
  return (
    <PlainButton>
      <Arrow fill={theme.palette.primary.main} />
      <ButtonText>{children}</ButtonText>
    </PlainButton>
  );
};

export default Button;
