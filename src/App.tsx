import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components';
import Navbar from './components/Navbar/Navbar';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
