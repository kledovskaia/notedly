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
  userData: TDataResponse['me'] | null;
};

export const AuthContext = createContext<TAuthContext>(null!);

export const AuthContextProvider: FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('notedly-token')
  );
  const { data, fetchMore } = useAppQuery<TDataResponse>('GET_MY_BASIC_INFO');
  const [userData, setUserData] = useState<TDataResponse['me'] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('notedly-token'));
  }, []);

  useEffect(() => {
    if (!data) setUserData(null);
    else setUserData(data.me);
  }, [data]);

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn]);

  useEffect(() => {
    if (token === null) return;
    if (token) localStorage.setItem('notedly-token', token);
    if (!token) localStorage.removeItem('notedly-token');
    setIsLoggedIn(!!token);
  }, [token]);

  const logout = () => {
    setToken('');
    setUserData(null);
  };
  const login = async (token: string) => {
    setToken(token);
    await fetchMore({});
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logout, login, userData }}>
      {children}
    </AuthContext.Provider>
  );
};
