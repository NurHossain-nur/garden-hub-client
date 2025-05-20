import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ShareTip from "../components/ShareTip/ShareTip";
import MyTips from "../components/MyTips/MyTips";
import Home from "../pages/Home/Home";
// import App from "../App";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/explore-gardeners", element: <h1>Explore Gardeners</h1> },
      { path: "/browse-tips", element: <h1>Browse Tips</h1> },
      { path: "/share-tip", element: <PrivateRoute><ShareTip></ShareTip></PrivateRoute> },
      { path: "/my-tips", element: <PrivateRoute><MyTips></MyTips></PrivateRoute> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ]
  }
]);

export  default router;