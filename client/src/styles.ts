import styled, { createGlobalStyle } from 'styled-components';
import { Link as RLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Form as FForm } from 'formik';
import { Card } from '@mui/material';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
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

export const Link = styled(RLink)``;

export const SignUpLink = styled(Link)`
  padding: 0.5rem;
`;
export const SignInLink = styled(Link)`
  padding: 0.5rem;
  color: #fff;
`;

export const NoteContainer = styled(Card)`
  a {
    color: #1976d2;
  }
`;
