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
`;

const FooterLinkText = styled.p`
  color: #404042;
  margin-left: 0.75rem;
  margin-bottom: 0;
  font-size: 1.1rem;
  font-weight: 900;
`;

const ContributeLink = styled.a`
  color: #e62024;
  font-weight: bold;
`;

const Footer = () => (
  <Container>
    <Box flex={1} mr="3.75%">
      <p>&copy; NorthOT | Designed by Larche, developed by the community.</p>
      <ContributeLink
        target="_blank"
        href="https://github.com/northot/northot.ca"
      >
        Contribute to this site
      </ContributeLink>
    </Box>
    <Flex
      alignItems="center"
      justifyContent="space-between"
      flex={1}
      ml="3.75%"
    >
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
    </Flex>
  </Container>
);

export default Footer;
