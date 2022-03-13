import { useAppQuery } from '../hooks/useAppQuery';
import { NotesContainer } from '../styles';
import { Note } from '../components/Note';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const Favorites = () => {
  useDocumentTitle('Favorites | Notedly');
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
