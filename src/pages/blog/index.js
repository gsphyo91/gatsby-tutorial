import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import { Layout } from "../../templates/Layout";

export const query = graphql`
  query GetPostList {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
        }
        id
        slug
      }
    }
  }
`;

const BlogPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {posts.map(({ id, frontmatter: { title }, slug }) => (
          <li key={id}>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default BlogPage;
