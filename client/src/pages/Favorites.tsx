import { useAppQuery } from '../hooks/useAppQuery';
import { NotesContainer } from '../styles';
import { Note } from '../components/Note';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { NoNotes } from '../components/NoNotes';

export const Favorites = () => {
  useDocumentTitle('Favorites | Notedly');
  const { data, loading } = useAppQuery<{ me: { favorites: TNote[] } }>(
    'GET_MY_FAVORITE_NOTES'
  );

  return (
    <NotesContainer>
      {!loading && !data?.me?.favorites?.length && <NoNotes />}
      {data &&
        data.me.favorites.map((note) => <Note key={note.id} note={note} />)}
    </NotesContainer>
  );
};
