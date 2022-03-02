import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
