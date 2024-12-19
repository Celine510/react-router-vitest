// router/index
import Home from '../page/home';
import Blog from '../page/blog';
import SideProjects from '../page/sideProjects';
import About from '../page/about';
import Layout from '../page/layout';
import Resume from '../page/resume';
import SocialMedia from '../page/socialMedia';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'sideProjects',
        element: <SideProjects />,
      },
      {
        path: 'about',
        element: <About />,
        children: [
          {
            path: 'resume',
            element: <Resume />,
          },
          {
            path: 'socialMedia',
            element: <SocialMedia />,
          },
        ]
      },
    ],
  },
]);

export default router;
