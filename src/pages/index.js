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
import VRGuy from "../components/VRGuy";
import Button from "../components/shared/Button";
import SpeakerCardWrapper from "../components/SpeakerCardWrapper";
import SpeakerCard from "../components/SpeakerCard";
import BecomeSpeaker from "../components/sections/BecomeSpeaker";
import Location from "../containers/Location";
import Footer from "../containers/Footer";

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
      <MainContent />
      <VRGuy />
      <Container py="15%" px="20%">
        <div
          css={`
            width: 80%;
            color: #646464;
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
        </div>
        <div
          css={`
            display: flex;
            justify-content: flex-end;
          `}
        >
          <Button>Explore Upcoming Events</Button>
        </div>
      </Container>
    </div>
    <section
      css={`
        position: relative;
        margin-top: -10%;
        padding: 10% 5%;
      `}
    >
      <SpeakersSection />
      <h2
        css={`
          margin: 0 0 0 auto;
          width: 50%;
          text-align: right;
          font-size: 77px;
        `}
      >
        <span
          css={`
            color: white;
          `}
        >
          next NorthOT event
        </span>
        <span
          css={`
            color: red;
          `}
        >
          .
        </span>
      </h2>
      <SpeakerCardWrapper>
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
      </SpeakerCardWrapper>
    </section>
    <BecomeSpeaker />
    <Location />
    <Footer />
  </Layout>
);

export default IndexPage;
