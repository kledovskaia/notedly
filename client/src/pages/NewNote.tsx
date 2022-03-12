import * as Yup from 'yup';
import { useAppMutation } from '../hooks/useAppMutation';
import { useNavigate } from 'react-router-dom';
import { GET_MY_NOTES, GET_NOTES } from '../graphql/query';
import { NoteForm } from '../components/NoteForm';

const validationSchema = Yup.object().shape({
  content: Yup.string().required('Please enter your Note'),
});

const fields = [
  {
    name: 'content',
    type: 'text',
    label: 'Note *',
    multiline: true,
    rows: 7,
  },
];

type TDataResponse = {
  newNote: {
    note: TNote;
  };
};

export const NewNote = () => {
  const navigate = useNavigate();
  const [newNote] = useAppMutation<TDataResponse>('NEW_NOTE', {
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
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
    <NoteForm
      title="New Note"
      fields={fields}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
  );
};
