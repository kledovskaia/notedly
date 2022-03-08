import { Button, Paper, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { Formik } from 'formik';
import { ObjectSchema } from 'yup';
import { Form } from '../styles';

type Props = {
  type: 'Sign In' | 'Sign Up';
  validationSchema: ObjectSchema<any>;
};

export const AuthForm: FC<Props> = ({ type, validationSchema }) => {
  return (
    <Paper
      sx={{ padding: '2rem 3rem', margin: '4rem auto', maxWidth: '50rem' }}
    >
      <Typography variant="h4" component="h2">
        {type}
      </Typography>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <Button type="submit" variant="outlined" fullWidth>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};
