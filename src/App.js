import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import WebTask from "./Web-Task";
import Location from "./Location";
import Reminder from "./Reminder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/tasks",
    element: <WebTask/>
  },
  {
    path: "/location",
    element: <Location/>
  },
  {
    path: "/reminder",
    element: <Reminder/>
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
