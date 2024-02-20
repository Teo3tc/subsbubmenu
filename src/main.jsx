import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from './Home'
import Blog from './Blog'
import Blog2 from './Blog2'
import Blog3 from './Blog3'
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children:[
            {
                path: "/:id",
                element: <Blog/>,
            },
            {
                path: "/:id/:id",
                element: <Blog2/>,
            },
            {
                path: "/:id/:id/:id",
                element: <Blog3/>,
            },

        ]
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
