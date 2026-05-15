import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
const Layout = lazy(() => import("./LayOut"));
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const NotFoundPage = lazy(() => import("./Pages/NotFound"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // This wraps all children below
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
