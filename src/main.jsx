import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import JObDetails from './components/JObDetails/JObDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';

// import { Root } from 'postcss';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  errorElement: <ErrorPage></ErrorPage>,
  children: [ 
           { path: "/",
           element: <Home></Home>
          },
      {
        path: "/applied",
         element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/Job/:id",
        element: <JObDetails></JObDetails>,
        loader: () => fetch('../jobs.json')
      },
     
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>
);
