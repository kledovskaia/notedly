import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MiniDrawer } from './components/Drawer';
import Header from './components/Header';
import { Navigation } from './components/Navigation';
import { NoteFeed } from './components/NoteFeed';
import { GET_NOTES } from './graphql/query';
import { useAppQuery } from './hooks/useAppQuery';

export const App = () => {
  const { data, loading, error, fetchMore } =
    useAppQuery<{ noteFeed: TNoteFeed }>('GET_NOTES');

  useEffect(() => {
    console.log(data);
  }, [data]);

  const loadMore = () => {};

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error!</h1>;
  if (!data) return <h1>No data found</h1>;

  return (
    <BrowserRouter>
      <MiniDrawer>
        <Routes>
          <Route
            path="/"
            element={
              <NoteFeed
                notes={data.noteFeed.notes}
                hasMore={data.noteFeed.hasNextPage}
                loadMore={loadMore}
              />
            }
          />
        </Routes>
      </MiniDrawer>
    </BrowserRouter>
  );
};
