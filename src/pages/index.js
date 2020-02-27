import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Description from "../containers/Description";
import BecomeSpeaker from "../containers/BecomeSpeaker";
import NextEvent from "../containers/NextEvent";
import Location from "../containers/Location";
import Footer from "../containers/Footer";
import Header from "../containers/Header";

const IndexPage = () => (
  <Layout>
    <SEO title="NorthOT - Barrie's Largest Dev Meetup" />
    <Header />
    <Description />
    <NextEvent />
    <BecomeSpeaker />
    <Location />
    <Footer />
  </Layout>
);

export default IndexPage;
