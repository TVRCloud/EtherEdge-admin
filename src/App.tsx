import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Root from "./root/root";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  const router = createBrowserRouter([
    {
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
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
