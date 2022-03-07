import { Paper, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  type: 'Sign In' | 'Sign Up';
};

export const AuthForm: FC<Props> = ({ type }) => {
  return (
    <Paper
      sx={{ padding: '2rem 3rem', margin: '4rem auto', maxWidth: '50rem' }}
    >
      <Typography variant="h4" component="h2">
        {type}
      </Typography>
    </Paper>
  );
};
