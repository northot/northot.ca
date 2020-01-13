import React from "react";
import styled from "styled-components";
import FacebookIcon from "../assets/facebook-icon.svg";
import GithubIcon from "../assets/github-icon.svg";
import SlackIcon from "../assets/slack-icon.svg";
import Box from "../components/shared/Box";
import Flex from "../components/shared/Flex";
import SocialLink from "../components/footer/SocialLink";

const Container = styled.footer`
  display: flex;
  padding: 0 7.5%;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const FooterLinkText = styled.p`
  color: #404042;
  margin-left: 0.75rem;
  margin-bottom: 0;
  font-size: 1.1rem;
  font-weight: 900;
`;

const ContributeLink = styled.a`
  display: block;
  color: #e62024;
  font-weight: bold;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const StyledCopy = styled.p`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SocialLinkContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-left: 3.75%;

  @media (max-width: 768px) {
    justify-content: center;
    margin-left: 0;
    margin-bottom: 1rem;
  }
`;

const CopyContainer = styled(Box)`
  flex: 1;
  margin-right: 3.75%;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Footer = () => (
  <Container id="footer">
    <CopyContainer>
      <StyledCopy>
        &copy; NorthOT | Designed by Larche, developed by the community.
      </StyledCopy>
      <ContributeLink
        target="_blank"
        href="https://github.com/northot/northot.ca"
      >
        Contribute to this site
      </ContributeLink>
    </CopyContainer>
    <SocialLinkContainer>
      <SocialLink
        label="follow us"
        icon={<FacebookIcon height="2.5rem" />}
        href="http://facebook.northot.ca"
      />
      <SocialLink
        label="converse"
        icon={<SlackIcon height="2.5rem" />}
        href="http://slack.northot.ca"
      />
      <SocialLink
        label="contribute"
        icon={<GithubIcon height="2.5rem" />}
        href="https://www.github.com/northot"
      />
    </SocialLinkContainer>
  </Container>
);

export default Footer;
