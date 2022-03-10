import { Navigate, Route, Routes } from 'react-router-dom';
import { MiniDrawer } from './components/Drawer';
import { Favorites } from './pages/Favorites';
import { MyNotes } from './pages/MyNotes';
import { NoteFeed } from './pages/NoteFeed';
import { NotePage } from './pages/NotePage';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { User } from './pages/User';

export const App = () => {
  return (
    <MiniDrawer>
      <Routes>
        <Route path="/my-notes" element={<MyNotes />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/note/:id" element={<NotePage />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<NoteFeed />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </MiniDrawer>
  );
};
