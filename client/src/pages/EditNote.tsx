import * as Yup from 'yup';
import { useAppMutation } from '../hooks/useAppMutation';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { GET_MY_NOTES, GET_NOTES } from '../graphql/query';
import { useAppQuery } from '../hooks/useAppQuery';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useContext, useMemo } from 'react';
import { AuthContext } from '../context/Auth';
import { NoteForm } from '../components/NoteForm';

const validationSchema = Yup.object().shape({
  content: Yup.string().required('Please enter your Note'),
});

type TDataResponse = {
  editNote: {
    note: TNote;
  };
};

export const EditNote = () => {
  const { userData } = useContext(AuthContext);
  const { id } = useParams();
  const { data, loading } = useAppQuery<{ note: TNote }>('GET_NOTE', {
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
        multiline: true,
        value: data?.note?.content,
        rows: 7,
      },
    ],
    [data]
  );

  return (
    <>
      {!loading && !data && <Navigate to="/" />}
      {data && data.note.author.id !== userData?.id && <Navigate to="/" />}
      {data && (
        <NoteForm
          title="Edit Note"
          fields={fields}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};
