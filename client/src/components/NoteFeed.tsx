import { useAppQuery } from '../hooks/useAppQuery';
import { FeedConainer, NotesContainer } from '../styles';
import { LoadMore } from './LoadMore';
import { Note } from './Note';

export const NoteFeed = () => {
  const { data, fetchMore } = useAppQuery<{ noteFeed: TNoteFeed }>('GET_NOTES');

  const loadMore = () => {};

  return (
    <FeedConainer>
      <NotesContainer>
        {data?.noteFeed?.notes?.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </NotesContainer>
      <LoadMore onClick={loadMore} />
    </FeedConainer>
  );
};
