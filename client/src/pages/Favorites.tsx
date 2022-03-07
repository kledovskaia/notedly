import { useAppQuery } from '../hooks/useAppQuery';
import { NotesContainer } from '../styles';
import { Note } from '../components/Note';

export const Favorites = () => {
  const { data } = useAppQuery<{ me: { favorites: TNote[] } }>(
    'GET_MY_FAVORITE_NOTES'
  );
  return (
    <NotesContainer>
      {data?.me?.favorites?.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </NotesContainer>
  );
};
