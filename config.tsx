import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
const Home = lazy(() => import('../pages/home/page'));
const Boutique = lazy(() => import('../pages/boutique/page'));
const Recrutement = lazy(() => import('../pages/recrutement/page'));
const Support = lazy(() => import('../pages/support/page'));
const Admin = lazy(() => import('../pages/admin/page'));
const NotFound = lazy(() => import('../pages/NotFound'));
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/boutique',
    element: <Boutique />,
  },
  {
    path: '/recrutement',
    element: <Recrutement />,
  },
  {
    path: '/support',
    element: <Support />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
export default routes;