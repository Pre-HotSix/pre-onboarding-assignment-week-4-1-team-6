import { BrowserRouter, Route, Routes } from 'react-router-dom';
import pages from './page';
import ProtectedRoute from './protectedRoute';

const RootRoute = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {pages.map((r) => {
          return (
            <Route
              key={r.pathname}
              path={r.pathname}
              element={
                <ProtectedRoute isPublic={r.isPublic}>
                  {r.element}
                </ProtectedRoute>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoute;
