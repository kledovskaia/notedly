import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MiniDrawer } from './components/Drawer';
import { Favorites } from './components/Favorites';
import { MyNotes } from './components/MyNotes';
import { NoteFeed } from './components/NoteFeed';
import { NotePage } from './components/NotePage';

export const App = () => {
  return (
    <BrowserRouter>
      <MiniDrawer>
        <Routes>
          <Route path="/" element={<NoteFeed />} />
          <Route path="/my-notes" element={<MyNotes />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </MiniDrawer>
    </BrowserRouter>
  );
};
