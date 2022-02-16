import { graphql, useStaticQuery } from "gatsby";
import {
  Container,
  Heading,
  NavLinkItem,
  NavDropdown,
  NavLinks,
  NavLinkText,
  SiteTitle,
} from "./Layout.style";
import * as React from "react";

const Layout = ({ category, children }) => {
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
      <title>{data.site.siteMetadata.title}</title>
      <nav>
        <NavLinks>
          <NavLinkItem>
            <NavLinkText to="/" title="홈으로 이동">
              <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
            </NavLinkText>
          </NavLinkItem>
          <NavLinkItem>
            <NavLinkText to="/about" title="소개">
              About
            </NavLinkText>
          </NavLinkItem>
        </NavLinks>
      </nav>
      <main>
        <Heading>{category}</Heading>
        {children}
      </main>
    </Container>
  );
};

export default Layout;
