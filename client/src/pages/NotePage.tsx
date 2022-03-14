import { Box } from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';
import { useAppQuery } from '../hooks/useAppQuery';
import { Note } from '../components/Note';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { LoadingContext } from '../context/Loading';
import { useContext } from 'react';

export const NotePage = () => {
  const { id } = useParams();
  const { data, loading } = useAppQuery<{ note: TNote }>('GET_NOTE', {
    variables: { id },
  });
  const { isLoading } = useContext(LoadingContext);
  useDocumentTitle(
    `${data && data.note.content.slice(0, 10)}${
      data && data.note.content.length >= 10 ? '...' : ''
    }`
  );

  return (
    <>
      {!loading && !isLoading && !data && <Navigate to="/" />}
      {data && (
        <Box sx={{ paddingTop: '4rem' }}>
          <Note note={data.note} />
        </Box>
      )}
    </>
  );
};
