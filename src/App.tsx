import RotatingBox from "./animations/RotatingBox";
import Zoop from "./animations/Zoop";
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router";
import Home from "./Home";
import StaggeredList from "./animations/StaggeredList";
import ViewSlider from "./animations/ViewSlider";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "rotating-box",
        element: <RotatingBox />,
      },
      {
        path: "zoop",
        element: <Zoop />,
      },
      {
        path: "staggered-list",
        element: <StaggeredList />,
      },
      {
        path: "view-slider",
        element: <ViewSlider />,
      },
    ],
  },
];

function App() {
  return <RouterProvider router={createBrowserRouter(routes,{basename: '/framer-tuts'})} />;
}

export default App;
