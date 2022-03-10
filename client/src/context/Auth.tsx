import { createContext, FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type TAuthContext = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
};

export const AuthContext = createContext<TAuthContext>(null!);

export const AuthContextProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('notedly-token'));
  }, []);

  useEffect(() => {
    if (isLoggedIn) navigate(`${location.state}` || '/', { replace: true });
  }, [isLoggedIn]);

  const logout = () => {
    localStorage.removeItem('notedly-token');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
