import { Backdrop, CircularProgress } from '@mui/material';
import { useContext } from 'react';
import { LoadingContext } from '../context/Loading';

export const Loader = () => {
  const { isLoading } = useContext(LoadingContext);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
