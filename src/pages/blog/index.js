import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import { Layout } from "../../templates/Layout";

export const query = graphql`
  query GetPostList {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
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
      {posts.map(({ id, frontmatter: { title, date }, body }) => (
        <article key={id}>
          <h2>{title}</h2>
          <p>Posted: {date}</p>
          <MDXRenderer>{body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  );
};

export default BlogPage;
