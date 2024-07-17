import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import App from './App.jsx';
import Home from './Home/Home.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client'
import SavedSplits from './SavedSplits/SavedSplits.jsx';
import Settings from './Settings/Settings.jsx';
import SplitCreator from './SplitCreator/SplitCreator.jsx';
import SplitTracker from './SplitTracker/SplitSelectorDialog/SplitTracker.jsx';
import SplitViewer from './SplitViewer.jsx/SplitViewer.jsx';
import WorkoutSessionLogger from './SplitTracker/WorkoutSessionLogger.jsx';

// import SplitTracker from './SplitTracker/SplitTracker.jsx';


const router = createBrowserRouter([
  {

    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/create',
        element: <SplitCreator />
      },
      {
        path: "/saved",
        element: <SavedSplits />
      },
      {
        path: "/split/:splitId",
        element: <SplitViewer />
      },
      {
        path: "/tracker",
        element: <SplitTracker />
      },
      {
        path: "/tracker/:sessionId",
        element: <WorkoutSessionLogger />
      },
      {
        path: '/settings',
        element: <Settings />
      }

    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
