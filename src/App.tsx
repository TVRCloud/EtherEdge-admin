import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Root from "./root/root";
import Dashboard from "./pages/dashboard/dashboard";
import Profile from "./pages/profile/profile";
import EditProfile from "./pages/profile/components/editProfile";

function App() {
  const router = createBrowserRouter([
    {
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/profile/editProfile",
          element: <EditProfile />,
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
