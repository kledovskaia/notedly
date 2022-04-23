import { Box, Paper, Typography } from '@mui/material';
import { FC, memo } from 'react';
import { ObjectSchema } from 'yup';
import { Form } from './Form';

type TField = {
  name: string;
  type: string;
  label: string;
  value?: string;
};

type Props = {
  title: string;
  fields: TField[];
  validationSchema: ObjectSchema<any>;
  onSubmit: (values: any) => void;
};

const NoteForm: FC<Props> = ({ title, fields, validationSchema, onSubmit }) => {
  return (
    <Paper sx={{ padding: '2rem 2rem 0', margin: '4rem 0' }}>
      <Typography variant="h4" component="h2">
        {title}
      </Typography>
      <Box sx={{ padding: '1.5rem 0 2rem' }}>
        <Form
          fields={fields}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        />
      </Box>
    </Paper>
  );
};

export default memo(NoteForm);
