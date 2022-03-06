import { useAppQuery } from '../hooks/useAppQuery';
import { NotesContainer } from '../styles';
import { Note } from './Note';

export const NoteFeed = () => {
  const { data } = useAppQuery<{ noteFeed: TNoteFeed }>('GET_NOTES');

  return (
    <NotesContainer>
      {data?.noteFeed?.notes?.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </NotesContainer>
  );
};
