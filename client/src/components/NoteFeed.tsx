import { FC } from 'react';
import { useAppQuery } from '../hooks/useAppQuery';
import { NoteFeedContainer } from '../styles';
import { Note } from './Note';

export const NoteFeed = () => {
  const { data, loading, error, fetchMore } =
    useAppQuery<{ noteFeed: TNoteFeed }>('GET_NOTES');

  return (
    <NoteFeedContainer>
      {data?.noteFeed?.notes?.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </NoteFeedContainer>
  );
};
