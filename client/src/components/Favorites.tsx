import { NotesContainer } from '../styles';
import { Note } from './Note';

export const Favorites = () => {
  const notes: TNote[] = [];
  return (
    <NotesContainer>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </NotesContainer>
  );
};
