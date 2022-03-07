import { Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { ObjectSchema } from 'yup';

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
        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};
