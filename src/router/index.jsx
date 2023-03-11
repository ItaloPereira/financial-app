import { createBrowserRouter } from "react-router-dom";

import BasicLayout from "layouts/Basic/Basic";
import Home from "pages/Home";
import Data from "pages/Data";

export default createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/data",
        element: <Data />,
      },
    ],
  },
]);
