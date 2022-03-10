import * as Yup from 'yup';
import { Paper } from '@mui/material';
import { Form } from '../components/Form';
import { useAppMutation } from '../hooks/useAppMutation';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  content: Yup.string().required('Please enter your Note'),
});

const fields = [{ name: 'content', type: 'text', label: 'Note *' }];

type TDataResponse = {
  newNote: {
    note: TNote;
  };
};

export const NewNote = () => {
  const navigate = useNavigate();
  const [newNote] = useAppMutation<TDataResponse>('NEW_NOTE', {
    onCompleted: ({ newNote: note }: { newNote: TNote }) => {
      navigate(`/note/${note.id}`);
    },
  });
  const onSubmit = ({ content }: any) => {
    newNote({
      variables: {
        content,
      },
    });
  };

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
