/* eslint-disable @typescript-eslint/no-explicit-any */
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { paths } from '@/config/paths';

const convert = (module: any) => {
  return {
    element: <module.default />,
  };
};

function createAppRouter() {
  return createBrowserRouter([
    {
      path: paths.home.path,
      lazy: () => import('./routes/landing').then(convert),
    },
    {
      path: paths.auth.register.path,
      element: <div>Register</div>,
    },
    {
      path: paths.auth.login.path,
      element: <div>Login</div>,
    },
    {
      path: '*',
      lazy: () => import('./not-found').then(convert),
    },
  ]);
}

function AppRouter() {
  const router = createAppRouter();

  return <RouterProvider router={router} />;
}

export default AppRouter;
