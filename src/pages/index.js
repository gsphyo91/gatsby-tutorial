import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Layout } from "../templates/Layout";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial</p>
      <StaticImage src="../images/dog.jpeg" alt="static image" />
    </Layout>
  );
};

export default IndexPage;
