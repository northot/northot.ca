import React from "react";

import Hero from "../components/Hero";
import Layout from "../components/layout";
import SEO from "../components/seo";

import MainTag from "../components/MainTag";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import Description from "../containers/Description";
import BecomeSpeaker from "../containers/BecomeSpeaker";
import NextEvent from "../containers/NextEvent";
import Location from "../containers/Location";
import Footer from "../containers/Footer";
import Header from "../containers/Header";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Description />
    <NextEvent />
    <BecomeSpeaker />
    <Location />
    <Footer />
  </Layout>
);

export default IndexPage;
