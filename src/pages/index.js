import React from "react";

import Hero from "../components/Hero";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { H1 } from "../components/shared/Header";

import Logo from "../components/Logo";
import Nav from "../components/Nav";
import MainContent from "../components/sections/MainContent";
import SpeakersSection from "../components/sections/SpeakersSection";
import VRGuy from "../components/VR-Guy";

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
      <H1
        css={`
          text-transform: uppercase;
          position: absolute;
          bottom: -10px;
          color: transparent;
          -webkit-text-stroke: 3px white;
          margin: 0;
          line-height: 1;
          padding-left: 5%;
        `}
      >
        Barrie's Largest
      </H1>

      <Nav />
    </div>
    <div
      css={`
        position: relative;
        z-index: 1;
        clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);
      `}
    >
      <MainContent />
      <div
        style={{
          zIndex: 10,
          position: "absolute",
          width: "30%",
          right: 0,
          top: -40,
        }}
      >
        <VRGuy />
      </div>
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
