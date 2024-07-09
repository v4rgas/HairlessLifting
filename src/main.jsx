import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import App from './App.jsx';
import MesoCreator from './MesoCreator/MesoCreator.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client'

const router = createBrowserRouter([
  {

    element: <App />,
    children: [
      {
        path: '/',
        element: <MesoCreator />
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
