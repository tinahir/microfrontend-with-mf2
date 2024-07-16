import { Navigate, createBrowserRouter } from "react-router-dom";
import { MAIN_PATH } from "../constant";
import { createRemoteComponent } from '@module-federation/bridge-react';
import { loadRemote } from '@module-federation/enhanced/runtime';

const RemoteApp = createRemoteComponent({
  loader: () => loadRemote('remote/exportApp'),
  loading: <div>LOADING</div>,
  fallback: <div>ERROR PAGE</div>
});

import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    
    children: [
      {
        path: MAIN_PATH.root,
        element: <Navigate to={`/${MAIN_PATH.browse}`} />,
      },
      {
        path: MAIN_PATH.browse,
        lazy: () => import("../pages/HomePage"),
      },
      {
        path: MAIN_PATH.genreExplore,
        children: [
          {
            path: ":genreId",
            lazy: () => import("../pages/GenreExplore"),
          },
        ],
      },
      {
        path: '/remote/*',
        Component: () =>  <RemoteApp /> ,
      },
      {
        path: MAIN_PATH.watch,
        lazy: () => import("../pages/WatchPage"),
      },
    ],
  },
],
{basename: "/"});

export default router;
