import { Box, Button } from '@mui/material';
import { useAppQuery } from '../hooks/useAppQuery';
import { FeedConainer, NotesContainer } from '../styles';
import { Note } from '../components/Note';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

type TDataResponse = { noteFeed: TNoteFeed };

export const NoteFeed = () => {
  useDocumentTitle('Home | Notedly');
  const { data, fetchMore } = useAppQuery<TDataResponse>('GET_NOTES');

  const loadMore = () => {
    fetchMore({
      variables: {
        cursor: data?.noteFeed?.cursor,
      },
      updateQuery: (prevRes, { fetchMoreResult }) =>
        ({
          noteFeed: {
            ...fetchMoreResult?.noteFeed,
            notes: [
              ...prevRes?.noteFeed?.notes,
              ...(fetchMoreResult?.noteFeed?.notes || []),
            ],
          },
        } as TDataResponse),
    });
  };

  return (
    <FeedConainer>
      {data && (
        <>
          <NotesContainer>
            {data.noteFeed.notes.map((note) => (
              <Note key={note.id} note={note} />
            ))}
          </NotesContainer>
          <Box sx={{ flex: 1 }}></Box>
          {data.noteFeed.hasNextPage && (
            <Button onClick={loadMore} variant="contained" size="large">
              Load More
            </Button>
          )}
        </>
      )}
    </FeedConainer>
  );
};
