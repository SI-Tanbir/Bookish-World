import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Header from './components/Header/Header.jsx';
import Books from './components/Books/Books.jsx';
import Cover from './components/Cover/Cover.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Main layout

    children: [
      {
        path: '/', // Default route
        element: <div>
          
          <Cover></Cover>
          <Books></Books>
        </div>, // Renders Books by default
      },
      {
        path:'/move',
        element:<div>

          <h3>hell this histakfsda</h3>
        </div>
      }
      // You can add more child routes here
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
