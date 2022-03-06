import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MiniDrawer } from './components/Drawer';
import Header from './components/Header';
import { Navigation } from './components/Navigation';
import { NoteFeed } from './components/NoteFeed';
import { GET_NOTES } from './graphql/query';

export const App = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const loadMore = () => {};

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error!</h1>;

  return (
    <BrowserRouter>
      <MiniDrawer
        main={<NoteFeed notes={data.noteFeed.notes} />}
        hasMore={data.noteFeed.hasNextPage}
        loadMore={loadMore}
      />
    </BrowserRouter>
  );
};
