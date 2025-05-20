import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
// import App from "../App";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <h1>Home</h1> },
      { path: "/explore-gardeners", element: <h1>Explore Gardeners</h1> },
      { path: "/browse-tips", element: <h1>Browse Tips</h1> },
      { path: "/share-tip", element: <h1>Share Tip</h1> },
      { path: "/my-tips", element: <h1>My Tips</h1> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ]
  }
]);

export  default router;