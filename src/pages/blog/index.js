import { graphql } from "gatsby";
import * as React from "react";
import { Layout } from "../../templates/Layout";

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

const BlogPage = ({
  data: {
    allFile: { nodes: posts },
  },
}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>My cool posts will go in here</p>
      <ul>
        {posts.map(({ name }, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogPage;
