import { Box } from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';
import { useAppQuery } from '../hooks/useAppQuery';
import { Note } from '../components/Note';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const NotePage = () => {
  const { id } = useParams();
  const { data, loading } = useAppQuery<{ note: TNote }>('GET_NOTE', {
    variables: { id },
  });
  useDocumentTitle(
    `${data && data.note.content.slice(0, 10)}${
      data && data.note.content.length >= 10 ? '...' : ''
    } | Notedly`
  );

  return (
    <>
      {!loading && !data && <Navigate to="/" />}
      {data && (
        <Box sx={{ paddingTop: '4rem' }}>
          <Note note={data.note} />
        </Box>
      )}
    </>
  );
};
