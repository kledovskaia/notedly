import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MiniDrawer } from './components/Drawer';
import { NoteFeed } from './components/NoteFeed';

export const App = () => {
  return (
    <BrowserRouter>
      <MiniDrawer>
        <Routes>
          <Route path="/" element={<NoteFeed />} />
        </Routes>
      </MiniDrawer>
    </BrowserRouter>
  );
};
