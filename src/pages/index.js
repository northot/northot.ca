import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import Logo from "../components/Logo";
import Section from "../components/Section";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <Logo />
    </Section>
  </Layout>
);

export default IndexPage;
