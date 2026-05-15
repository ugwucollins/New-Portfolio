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

// Aos Animations

// 👻 Animations
// There are serveral predefined animations you can use already:

// Fade animations:

// fade
// fade-up
// fade-down
// fade-left
// fade-right
// fade-up-right
// fade-up-left
// fade-down-right
// fade-down-left
// Flip animations:

// flip-up
// flip-down
// flip-left
// flip-right
// Slide animations:

// slide-up
// slide-down
// slide-left
// slide-right
// Zoom animations:

// zoom-in
// zoom-in-up
// zoom-in-down
// zoom-in-left
// zoom-in-right
// zoom-out
// zoom-out-up
// zoom-out-down
// zoom-out-left
// zoom-out-right
