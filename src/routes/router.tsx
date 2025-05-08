import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Main from "../layout/Main";
import NotFound from "../shared/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
