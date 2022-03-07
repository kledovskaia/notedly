import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: email, password: password)
  }
`;

export const SIGN_IN = gql``;
