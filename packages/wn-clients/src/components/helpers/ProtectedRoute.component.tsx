import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { useAuthentication } from 'hooks';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthentication();

  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate replace to="/unauthorized" state={{ from: location }} />
  );
};

export default ProtectedRoute;
