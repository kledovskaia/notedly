import { Button } from '@mui/material';
import { useAppQuery } from '../hooks/useAppQuery';
import { FeedConainer, NotesContainer } from '../styles';
import { Note } from '../components/Note';

type TDataResponse = { noteFeed: TNoteFeed };

export const NoteFeed = () => {
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
          {data.noteFeed.hasNextPage && (
            <Button onClick={loadMore} variant="outlined">
              Load More
            </Button>
          )}
        </>
      )}
    </FeedConainer>
  );
};
