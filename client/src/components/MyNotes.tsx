import { NotesContainer } from '../styles';
import { Note } from './Note';

export const MyNotes = () => {
  const notes: TNote[] = [];
  return (
    <NotesContainer>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </NotesContainer>
  );
};
