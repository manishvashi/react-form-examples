import { HomeLayout, Landing, Error, Posts, About } from '../pages';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RouterForm, { action as contactAction } from '../components/RouterForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'posts',
        element: <Posts />,
      },
      {
        path: 'contact',
        element: <RouterForm />,
        action: contactAction,
      },
    ],
  },
]);

function AllRoutes() {
  return <RouterProvider router={router} />;
}
export default AllRoutes;
