import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from '../utils/routes';

const AppRouter: FC = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to="/message" />}></Route>
    </Routes>
  );
};

export default AppRouter;
