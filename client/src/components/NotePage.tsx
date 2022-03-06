import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppQuery } from '../hooks/useAppQuery';
import { Note } from './Note';

export const NotePage = () => {
  const { id } = useParams();
  const { data, loading, error, fetchMore } = useAppQuery<{ note: TNote }>(
    'GET_NOTE',
    { variables: { id } }
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
