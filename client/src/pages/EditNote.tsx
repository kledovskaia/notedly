import * as Yup from 'yup';
import { Paper } from '@mui/material';
import { Form } from '../components/Form';
import { useAppMutation } from '../hooks/useAppMutation';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_MY_NOTES, GET_NOTES } from '../graphql/query';
import { useAppQuery } from '../hooks/useAppQuery';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useMemo } from 'react';

const validationSchema = Yup.object().shape({
  content: Yup.string().required('Please enter your Note'),
});

type TDataResponse = {
  editNote: {
    note: TNote;
  };
};

export const EditNote = () => {
  const { id } = useParams();
  const { data } = useAppQuery<{ note: TNote }>('GET_NOTE', {
    variables: { id },
  });
  useDocumentTitle(
    `${data && data.note.content.slice(0, 10)}${
      data && data.note.content.length >= 10 ? '...' : ''
    } | Notedly`
  );
  const navigate = useNavigate();
  const [updateNote] = useAppMutation<TDataResponse>('EDIT_NOTE', {
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
    onCompleted: () => navigate(`/note/${id}`),
  });
  const onSubmit = ({ content }: any) => {
    updateNote({
      variables: {
        content,
        id,
      },
    });
  };
  const fields = useMemo(
    () => [
      {
        name: 'content',
        type: 'text',
        label: 'Note *',
        value: data?.note?.content,
      },
    ],
    [data]
  );

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
