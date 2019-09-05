import React from "react";
import styled from "styled-components";
import FacebookIcon from "../assets/facebook-icon.svg";
import GithubIcon from "../assets/github-icon.svg";
import SlackIcon from "../assets/slack-icon.svg";

const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavLink = styled.a``;

const NavListItem = styled.li`
  text-align: right;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  padding-right: 1rem;
  font-size: 0.8rem;
  color: white;
  border-right: 1px solid
    ${props => (props.isActive ? props.theme.palette.primary.main : "white")};
`;

const NavLinkItem = ({ isActive, ...props }) => (
  <NavListItem isActive={isActive}>
    <NavLink {...props} />.
  </NavListItem>
);

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  position: absolute;
  top: 5%;
  right: 2%;
`;

const List = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const SocialLink = styled.a`
  text-align: center;
`;

const Nav = () => (
  <StyledNav>
    <NavList>
      <NavLinkItem isActive>NorthOT</NavLinkItem>
      <NavLinkItem>speakers</NavLinkItem>
      <NavLinkItem>location</NavLinkItem>
      <NavLinkItem>register</NavLinkItem>
      <NavLinkItem>give a talk</NavLinkItem>
    </NavList>
    <List>
      <SocialLink href="http://facebook.northot.ca" target="_blank">
        <FacebookIcon
          height="20px"
          css={`
            margin: 0.1rem;
          `}
        />
      </SocialLink>
      <SocialLink href="http://slack.northot.ca" target="_blank">
        <SlackIcon
          height="40px"
          css={`
            margin: 0.1rem;
          `}
        />
      </SocialLink>
      <SocialLink href="https://www.github.com/northot" target="_blank">
        <GithubIcon
          fill="#fff"
          css={`
            margin: 0.1rem;
          `}
          height="20px"
        />
      </SocialLink>
    </List>
  </StyledNav>
);

export default Nav;
