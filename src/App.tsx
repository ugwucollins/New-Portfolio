import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, useEffect } from "react";
import Contact from "./Pages/Contact";
import Aos from "aos";
const Layout = lazy(() => import("./LayOut"));
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Skills = lazy(() => import("./Pages/Skills"));
const NotFoundPage = lazy(() => import("./Pages/NotFound"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // This wraps all children below
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "skills", element: <Skills /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 600,
      easing: "ease-in-out",
      delay: 2,
    });
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
