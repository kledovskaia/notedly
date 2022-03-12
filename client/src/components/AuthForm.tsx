import { Box, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { ObjectSchema } from 'yup';
import { Link } from '../styles';
import { Form } from './Form';

type TField = {
  name: string;
  type: string;
  label: string;
};

type Props = {
  type: 'Sign In' | 'Sign Up';
  fields: TField[];
  validationSchema: ObjectSchema<any>;
  onSubmit: (values: any) => void;
};

export const AuthForm: FC<Props> = ({
  type,
  validationSchema,
  fields,
  onSubmit,
}) => {
  return (
    <Paper
      sx={{ padding: '2rem 3rem', margin: '4rem auto', maxWidth: '50rem' }}
    >
      <Typography variant="h4" component="h2">
        {type}
      </Typography>
      <Box sx={{ padding: '1rem 0 2rem' }}>
        <Form
          fields={fields}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        />
      </Box>
      {type === 'Sign In' && (
        <Typography align="center">
          Don't have an account? <Link to="/sign-up">Sign Up</Link>
        </Typography>
      )}
      {type === 'Sign Up' && (
        <Typography align="center">
          Already have an account? <Link to="/sign-in">Sign In</Link>
        </Typography>
      )}
    </Paper>
  );
};
