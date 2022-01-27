import * as React from "react";
import { Container, Heading, NavLinkItem, NavLinks, NavLinkText } from "./Layout.style";

const Layout = ({ pageTitle, children }) => {
  return (
    <Container>
      <title>{pageTitle}</title>
      <nav>
        <NavLinks>
          <NavLinkItem>
            <NavLinkText to="/">Home</NavLinkText>
          </NavLinkItem>
          <NavLinkItem>
            <NavLinkText to="/about">About</NavLinkText>
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
