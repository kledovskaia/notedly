import { FC } from 'react';

type Props = {
  onClick: () => void;
};

export const LoadMore: FC<Props> = ({ onClick }) => {
  return <button onClick={onClick}>Load More</button>;
};
