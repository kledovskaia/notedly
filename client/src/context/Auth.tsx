import { createContext, FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppQuery } from '../hooks/useAppQuery';

type TDataResponse = {
  me: {
    id: TUser['id'];
    username: TUser['username'];
    avatar: TUser['avatar'];
  };
};
type TAuthContext = {
  isLoggedIn: boolean;
  logout: () => void;
  login: (token: string) => void;
  userData: Partial<TUser> | null;
};

export const AuthContext = createContext<TAuthContext>(null!);

export const AuthContextProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('notedly-token')
  );
  const { data, fetchMore } = useAppQuery<TDataResponse>('GET_MY_BASIC_INFO');
  const [userData, setUserData] = useState<Partial<TUser> | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('notedly-token'));
  }, []);

  useEffect(() => {
    if (!data) setUserData(null);
    else setUserData(data.me);
  }, [data]);

  useEffect(() => {
    if (!isLoggedIn) setUserData(null);
    else fetchMore({});
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn]);

  useEffect(() => {
    if (token === null) return;
    setIsLoggedIn(!!token);
  }, [token]);

  const logout = () => {
    localStorage.removeItem('notedly-token');
    setToken('');
  };
  const login = (token: string) => {
    localStorage.setItem('notedly-token', token);
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logout, login, userData }}>
      {children}
    </AuthContext.Provider>
  );
};
