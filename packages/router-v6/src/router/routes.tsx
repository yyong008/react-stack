import { loadable } from './loadable';

const appRoutes = [
  {
    path: '/',
    element: loadable({
      loader: () => import('../layout'),
    }),
    children: [
      {
        index: true,
        path: "/",
        element: loadable({
          loader: () => import('../pages/home'),
        }),
      },
      {
        path: '/about',
        element: loadable({
          loader: () => import('../pages/about'),
        }),
      },
    ],
  },
];

const routes = [...appRoutes];

export default routes;
