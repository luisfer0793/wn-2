import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ForbiddenPage, LandingPage, NotFoundPage, LoginPage } from 'pages';
import ProtectedRoute from '../helpers/ProtectedRoute.component';

const RootRoutes: FC = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      {/* ---- RUTAS PROTEGIAS ---- */}
      <Route element={<ProtectedRoute />}>
        <Route path="/cliente" element={<p>Nutris</p>} />
      </Route>

      {/* ---- RUTAS PUBLICAS ---- */}
      <Route path="iniciar-sesion" element={<LoginPage />} />
      <Route path="/unauthorized" element={<ForbiddenPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RootRoutes;
