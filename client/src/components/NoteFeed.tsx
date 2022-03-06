import { FC } from 'react';
import { NoteFeedContainer } from '../styles';
import { Note } from './Note';

type Props = {
  notes: TNote[];
  hasMore: boolean;
  loadMore: () => void;
};

export const NoteFeed: FC<Props> = ({ notes }) => {
  return (
    <NoteFeedContainer>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </NoteFeedContainer>
  );
};
