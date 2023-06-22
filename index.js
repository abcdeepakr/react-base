import App from "./src/App";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Todos from "./src/components/Todos/Todos";
import Todo from "./src/components/Todos/Todo";
import Error from "./src/components/404/Error";
import Photos from "./src/components/Photos/Photos";
import Users from './src/components/Users/Users'
import DHTMLX from "./src/components/DHTMLX/DHTMLX";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true },
    ],
    exact: true
  },
  {
    path: 'todos',
    element: <Todos />,
  },
  {
    path: "todos/:id",
    element: <Todo />
  },
  {
    path: 'photos',
    element: <Photos />
  },
  {
    path: 'users',
    element: <Users />
  },
  { 
    path: 'dhtmlx-grid',
    element: <DHTMLX />
  },
  {
    path: "*",
    element: <Error />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />

);
