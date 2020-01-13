import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import MainTag from "../components/MainTag";
import Hero from "../components/Hero";
import Nav from "../components/Nav";

const Wrapper = styled.section`
  position: relative;
`;

const StyledLogo = styled(Logo)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100px;
`;

const Header = () => {
  return (
    <Wrapper>
      <Hero />
      <StyledLogo />
      <MainTag />
      <Nav />
    </Wrapper>
  );
};

export default Header;
