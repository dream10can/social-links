import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import UserName from "./pages/UserName/UserName";
import HeaderSection from "./components/headersection/HeaderSection.jsx";
import RequireAuth from "./components/requireauth/RequireAuth.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import AboutApp from "./pages/AboutApp/AboutApp.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HeaderSection />,

      children: [
        { path: "/social-links", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        { path: "*", element: <NotFound /> },
      ],
    },

    {
      path: "/",
      element: <RequireAuth />,

      children: [{ path: "/admin", element: <Admin /> }],
    },
    { path: "/AboutApp", element: <AboutApp /> },
    { path: "/page/:userNameId", element: <UserName /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
