import { useAppQuery } from '../hooks/useAppQuery';
import { NotesContainer } from '../styles';
import { Note } from '../components/Note';

export const MyNotes = () => {
  const { data } = useAppQuery<{ me: { notes: TNote[] } }>('GET_MY_NOTES');
  return (
    <NotesContainer>
      {data?.me?.notes?.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </NotesContainer>
  );
};
