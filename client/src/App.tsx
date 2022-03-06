import { BrowserRouter } from 'react-router-dom';
import { MiniDrawer } from './components/Drawer';

export const App = () => {
  return (
    <BrowserRouter>
      <MiniDrawer />
    </BrowserRouter>
  );
};
