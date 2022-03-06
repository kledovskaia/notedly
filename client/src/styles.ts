import styled from 'styled-components';
import { Link as RLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export const Link = styled(RLink)`
  color: inherit;
  text-decoration: none;
`;

export const NoteFeedContainer = styled.section`
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
