import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Heading, NavLinkItem, NavLinks, NavLinkText, SiteTitle } from "./Layout.style";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
      <nav>
        <NavLinks>
          <NavLinkItem>
            <NavLinkText to="/">Home</NavLinkText>
          </NavLinkItem>
          <NavLinkItem>
            <NavLinkText to="/about">About</NavLinkText>
          </NavLinkItem>
          <NavLinkItem>
            <NavLinkText to="/blog">Blog</NavLinkText>
          </NavLinkItem>
        </NavLinks>
      </nav>
      <main>
        <Heading>{pageTitle}</Heading>
        {children}
      </main>
    </Container>
  );
};

export default Layout;
