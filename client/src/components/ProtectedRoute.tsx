import { FC, useContext } from 'react';
import { AuthContext } from '../context/Auth';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute: FC = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return <>{isLoggedIn ? children : <Navigate to="/sign-in" />}</>;
};
