import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Root from "./root/root";

function App() {
  const router = createBrowserRouter([
    {
      element: <Root />,
      children: [
        {
          path: "/",
          element: "a",
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
