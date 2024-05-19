import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "../views/About";
import Home from "../views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
]);
const MainRoutes = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default MainRoutes;
