import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as React from "react";
import { Layout } from "../../templates/Layout";

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

const BlogPost = ({
  data: {
    mdx: {
      id,
      frontmatter: { title, date },
      body,
    },
  },
}) => {
  return (
    <Layout pageTitle={title}>
      <p>{date}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export default BlogPost;
