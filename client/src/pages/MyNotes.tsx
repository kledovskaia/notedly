import { useAppQuery } from '../hooks/useAppQuery';
import { NotesContainer } from '../styles';
import { Note } from '../components/Note';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

type TDataResponse = { me: { notes: TNote[] } };

export const MyNotes = () => {
  useDocumentTitle('My Notes | Notedly');
  const { data } = useAppQuery<TDataResponse>('GET_MY_NOTES');
  return (
    <NotesContainer>
      {[...(data?.me?.notes || [])]
        .sort((a, b) => (b.id > a.id ? 1 : 0))
        .map((note) => (
          <Note key={note.id} note={note} />
        ))}
    </NotesContainer>
  );
};
