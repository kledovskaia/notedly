import { Button } from '@mui/material';
import { useAppQuery } from '../hooks/useAppQuery';
import { FeedConainer, NotesContainer } from '../styles';
import { Note } from './Note';

export const NoteFeed = () => {
  const { data, fetchMore } = useAppQuery<{ noteFeed: TNoteFeed }>('GET_NOTES');

  const loadMore = () => {};

  return (
    <FeedConainer>
      {data && (
        <>
          <NotesContainer>
            {data.noteFeed.notes.map((note) => (
              <Note key={note.id} note={note} />
            ))}
          </NotesContainer>
          <Button onClick={loadMore} variant="outlined">
            Load More
          </Button>
        </>
      )}
    </FeedConainer>
  );
};
