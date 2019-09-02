import React from "react";

import Hero from "../components/Hero";
import Layout from "../components/layout";
import SEO from "../components/seo";

import MainTag from "../components/MainTag";
import Container from "../components/Container";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import MainContent from "../components/sections/MainContent";
import SpeakersSection from "../components/sections/SpeakersSection";
import VRGuy from "../components/VR-Guy";
import Button from "../components/shared/Button";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ position: "relative" }}>
      <Hero />
      <Logo
        css={`
          position: absolute;
          top: 0;
          left: 0;
          height: 100px;
        `}
      />
      <MainTag />
      <Nav />
    </div>
    <div
      css={`
        width: 100%;
        position: relative;
      `}
    >
      <VRGuy />
      <Container py>
        <div
          css={`
            width: 50%;
          `}
        >
          <p>
            NorthOT is a tech focused meet up in the Barrie and surrounding
            area. NorthOT wants to encourage tech North of Toronto by allowing
            people of all experience the ability to interact, learn, educate and
            make connections with companies and individuals.
          </p>
          <p>
            NorthOT is intended for both beginners and experts, to be able to
            share wisdom and ask questions without judgement. The ability to
            hone skills from presentational, to conversational. To better
            ourselves and those around us.
          </p>
          <Button>Explore Upcoming Events</Button>
        </div>
      </Container>
      <MainContent />
    </div>
    <div
      css={`
        margin-top: -12%;
        clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
      `}
    >
      <SpeakersSection />
    </div>
  </Layout>
);

export default IndexPage;
