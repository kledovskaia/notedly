import styled from 'styled-components';
import { NavLink as NLink } from 'react-router-dom';

export const NavLink = styled(NLink)`
  color: inherit;
  text-decoration: none;
`;

export const NoteFeedContainer = styled.section`
  padding: 4rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 2rem;
`;
