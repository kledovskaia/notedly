import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MiniDrawer } from './components/Drawer';
import { Favorites } from './components/Favorites';
import { MyNotes } from './components/MyNotes';
import { NoteFeed } from './components/NoteFeed';
import { NotePage } from './components/NotePage';
import { User } from './components/User';

export const App = () => {
  return (
    <BrowserRouter>
      <MiniDrawer>
        <Routes>
          <Route path="/my-notes" element={<MyNotes />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/note/:id" element={<NotePage />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/" element={<NoteFeed />} />
        </Routes>
      </MiniDrawer>
    </BrowserRouter>
  );
};
