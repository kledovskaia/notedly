import { useContext, useEffect } from 'react';
import { LoadingContext } from '../context/Loading';
import { useAppQuery } from '../hooks/useAppQuery';
import { NoteFeedContainer } from '../styles';
import { Note } from './Note';

export const NoteFeed = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { data, loading, error, fetchMore } =
    useAppQuery<{ noteFeed: TNoteFeed }>('GET_NOTES');

  useEffect(() => {
    if (isLoading !== loading) setIsLoading(loading);
  }, [loading]);

  return (
    <NoteFeedContainer>
      {data?.noteFeed?.notes?.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </NoteFeedContainer>
  );
};
