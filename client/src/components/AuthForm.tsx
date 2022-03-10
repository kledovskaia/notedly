import { Button, Paper, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { Formik } from 'formik';
import { ObjectSchema } from 'yup';
import { Form, Link } from '../styles';

type TField = {
  name: string;
  type: string;
  label: string;
};

type Props = {
  type: 'Sign In' | 'Sign Up';
  validationSchema: ObjectSchema<any>;
  fields: TField[];
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
      <Formik
        initialValues={
          fields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}) as {
            [key in string]: string;
          }
        }
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            {fields.map((field) => (
              <TextField
                autoComplete="new-password"
                key={field.name}
                fullWidth
                id={field.name}
                name={field.name}
                type={field.type}
                label={
                  touched[field.name] && Boolean(errors[field.name])
                    ? errors[field.name]
                    : field.label
                }
                value={values[field.name]}
                onChange={handleChange}
                error={touched[field.name] && Boolean(errors[field.name])}
              />
            ))}
            <Button type="submit" variant="contained" size="large" fullWidth>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
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
