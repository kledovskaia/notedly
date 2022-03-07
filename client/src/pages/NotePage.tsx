import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppQuery } from '../hooks/useAppQuery';
import { Note } from '../components/Note';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const NotePage = () => {
  const { id } = useParams();
  const { data, loading, error, fetchMore } = useAppQuery<{ note: TNote }>(
    'GET_NOTE',
    { variables: { id } }
  );
  useDocumentTitle(
    `${data?.note.content.split(' ').slice(1, 4).join(' ')}... | Notedly`
  );

  return (
    <>
      {data && (
        <Box sx={{ paddingTop: '4rem' }}>
          <Note note={data.note} />
        </Box>
      )}
    </>
  );
};
