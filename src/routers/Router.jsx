import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
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
      { path: "/login", element: <h1>Login</h1> },
      { path: "/signup", element: <h1>SignUp</h1> },
    ]
  }
]);

export  default router;