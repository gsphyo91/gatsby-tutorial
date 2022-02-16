import { Link } from "gatsby";
import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  max-width: 70%;
  font-family: sans-serif;
`;

export const SiteTitle = styled.header`
  font-size: 3rem;
  color: #000000;
  font-weight: 700;
  margin: 2rem 0;
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
  padding-left: 0;
`;

export const NavLinkItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavLinkText = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Heading = styled.h1`
  color: rebeccapurple;
`;
