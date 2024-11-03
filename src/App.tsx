import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/root";
import Dashboard from "./pages/Dashboard/page";
import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    // Initialize theme based on user preference
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.documentElement.classList.toggle("dark", userPrefersDark);
  }, []);

  const router = createBrowserRouter([
    {
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        // {
        //   path: "/profile",
        //   element: <Profile />,
        // },
        // {
        //   path: "/profile/editProfile",
        //   element: <EditProfile />,
        // },
        {
          path: "/analytics/overview",
          element: "<Dashboard />",
        },
        {
          path: "/users/list",
          element: "<jdkifjksdhfsho />",
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
