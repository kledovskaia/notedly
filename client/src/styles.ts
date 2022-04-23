import styled, { createGlobalStyle } from 'styled-components';
import { Link as RLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Form as FForm } from 'formik';
import { Card } from '@mui/material';
import { Box } from '@mui/system';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    @media screen and (max-width: 40rem) {
    font-size: 90%;
    }
  }

  body {
    overflow-x: hidden;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const FeedConainer = styled.section`
  min-height: 93vh;
  display: flex;
  flex-direction: column;
`;

export const NotesContainer = styled.section`
  padding: 4rem 0;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));

  @media screen and (max-width: 40rem) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
  @media screen and (max-width: 30rem) {
    gap: 1rem;
  }
`;

export const Markdown = styled(ReactMarkdown)`
  p {
    margin: 0;
  }
`;
export const Form = styled(FForm)`
  display: flex;
  flex-direction: column;

  & > * + * {
    display: block;
    margin-top: 1rem !important;
  }
`;

export const Link = styled(RLink)`
  color: inherit;
  text-decoration: none;
`;

export const SignUpLink = styled(Link)`
  padding: 0.5rem;
`;
export const SignInLink = styled(Link)`
  padding: 0.5rem;
  color: #fff;
`;

export const NoteContainer = styled(Card)`
  a > a {
    color: #1976d2;
  }
`;

export const Main = styled(Box)`
  padding: 1.5rem;
  flex-grow: 1;

  @media screen and (max-width: 30rem) {
    padding: 0.5rem 0;
  }
`;
