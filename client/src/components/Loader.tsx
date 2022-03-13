import { Backdrop, CircularProgress } from '@mui/material';
import { useContext } from 'react';
import { LoadingContext } from '../context/Loading';

export const Loader = () => {
  const { loadingState } = useContext(LoadingContext);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={Object.entries(loadingState).some(
        ([_, value]: [string, boolean]) => value
      )}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
