import * as Yup from 'yup';
import { Paper } from '@mui/material';
import { Form } from '../components/Form';

const validationSchema = Yup.object().shape({
  note: Yup.string().required('Please enter your Note'),
});

const fields = [{ name: 'note', type: 'text', label: 'Note *' }];

export const NewNote = () => {
  const onSubmit = () => {};

  return (
    <Paper sx={{ padding: '1rem 2rem', margin: '4rem 0' }}>
      <Form
        fields={fields}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      />
    </Paper>
  );
};
