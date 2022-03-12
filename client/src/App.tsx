import { Navigate, Route, Routes } from 'react-router-dom';
import { MiniDrawer } from './components/Drawer';
import { ProtectedRoute } from './components/ProtectedRoute';
import { EditNote } from './pages/EditNote';
import { Favorites } from './pages/Favorites';
import { MyNotes } from './pages/MyNotes';
import { NewNote } from './pages/NewNote';
import { NoteFeed } from './pages/NoteFeed';
import { NotePage } from './pages/NotePage';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { User } from './pages/User';

export const App = () => {
  return (
    <MiniDrawer>
      <Routes>
        <Route
          path="/my-notes"
          element={
            <ProtectedRoute>
              <MyNotes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />
        <Route path="/edit/:id" element={<EditNote />} />
        <Route path="/new" element={<NewNote />} />
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
