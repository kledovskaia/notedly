import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import { FC } from 'react';
import { ObjectSchema } from 'yup';
import { Form as FForm } from '../styles';

type TField = {
  name: string;
  type: string;
  label: string;
  value?: string;
};

type Props = {
  fields: TField[];
  validationSchema: ObjectSchema<any>;
  onSubmit: (values: any) => void;
};

export const Form: FC<Props> = ({ fields, onSubmit, validationSchema }) => {
  return (
    fields && (
      <Formik
        initialValues={
          fields.reduce(
            (acc, field) => ({ ...acc, [field.name]: field?.value || '' }),
            {}
          ) as {
            [key in string]: string;
          }
        }
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, values, handleChange }) => (
          <FForm>
            {fields.map((field) => (
              <TextField
                {...field}
                autoComplete="new-password"
                key={field.name}
                fullWidth
                id={field.name}
                label={
                  touched[field.name] && Boolean(errors[field.name])
                    ? errors[field.name]
                    : field.label
                }
                value={values[field.name]}
                onChange={handleChange}
                error={
                  Boolean(touched[field.name]) && Boolean(errors[field.name])
                }
              />
            ))}
            <Button type="submit" variant="contained" size="large" fullWidth>
              Submit
            </Button>
          </FForm>
        )}
      </Formik>
    )
  );
};
