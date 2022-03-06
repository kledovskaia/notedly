import styled, { createGlobalStyle } from 'styled-components';
import { Link as RLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export const GlobalStyles = createGlobalStyle`
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Link = styled(RLink)`
  color: inherit;
  text-decoration: none;
`;

export const NotesContainer = styled.section`
  padding: 4rem 0;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));

  @media screen and (max-width: 40rem) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
`;

export const Markdown = styled(ReactMarkdown)`
  p {
    margin: 0;
  }
`;
