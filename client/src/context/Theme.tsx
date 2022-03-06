import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, ReactNode, useCallback, useState } from 'react';

const themes = {
  light: createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#E5E5E5',
      },
    },
  }),
  dark: createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#24242b',
        paper: '#363740',
      },
    },
  }),
};

export const ThemeContext = createContext<[keyof typeof themes, () => void]>(
  null!
);

type Props = {
  children: ReactNode;
};

export function ThemeContextProvider({ children }: Props) {
  const type = localStorage.getItem('notedly-theme') || 'dark';
  const [theme, setTheme] = useState(type as keyof typeof themes);

  const toggleMode = useCallback(() => {
    setTheme((state) => {
      if (state === 'dark') {
        localStorage.setItem('notedly-theme', 'light');
        return 'light';
      }
      localStorage.setItem('notedly-theme', 'dark');
      return 'dark';
    });
  }, []);

  return (
    <ThemeProvider theme={themes[theme]}>
      <ThemeContext.Provider value={[theme, toggleMode]}>
        <CssBaseline />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
