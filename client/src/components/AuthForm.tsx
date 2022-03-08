import { Button, Paper, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { Formik } from 'formik';
import { ObjectSchema } from 'yup';
import { Form } from '../styles';

type TField = {
  name: string;
  type: string;
  label: string;
};

type Props = {
  type: 'Sign In' | 'Sign Up';
  validationSchema: ObjectSchema<any>;
  fields: TField[];
};

export const AuthForm: FC<Props> = ({ type, validationSchema, fields }) => {
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
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            {fields.map((field) => (
              <TextField
                key={field.name}
                fullWidth
                id={field.name}
                name={field.name}
                label={errors[field.name] || field.label}
                value={values[field.name]}
                onChange={handleChange}
                error={touched[field.name] && Boolean(errors[field.name])}
              />
            ))}
            <Button type="submit" variant="outlined" fullWidth>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};
