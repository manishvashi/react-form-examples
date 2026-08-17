import {
  HomeLayout,
  FormWIthFormData,
  FormWithControlledInput,
  FormWithZod,
} from '../pages';

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
        element: <FormWithControlledInput />,
      },
      {
        path: 'formdata',
        element: <FormWIthFormData />,
      },
      {
        path: 'zod',
        element: <FormWithZod />,
      },
      {
        path: 'routerform',
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
