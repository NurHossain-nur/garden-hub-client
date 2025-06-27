import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
// import ShareTip from "../components/ShareTip/ShareTip";
// import MyTips from "../components/MyTips/MyTips";
import Home from "../pages/Home/Home";
import ShareTip from "../pages/ShareTip/ShareTip";
import BrowseTips from "../pages/BrowseTips/BrowseTips";
import TipDetails from "../pages/TipDetails/TipDetails";
import MyTips from "../pages/MyTips/MyTips";
import ExploreGardeners from "../pages/ExploreGardeners/ExploreGardeners";
import NotFound from "../pages/NotFound/NotFound";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import Support from "../pages/Support/Support";
import DashboardLayout from "../layouts/DashboardLayout";
import Overview from "../Dashboard/Overview";
import DashboardMyTips from "../Dashboard/DashboardMyTips";
import AddTip from "../Dashboard/AddTip";
import Profile from "../Dashboard/Profile";
import AllTips from "../Dashboard/AllTips";
// import App from "../App";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/explore-gardeners", element: <ExploreGardeners></ExploreGardeners> },
      { path: "/browse-tips", element: <BrowseTips></BrowseTips> },
      { path: "/share-tip", element: <PrivateRoute><ShareTip></ShareTip></PrivateRoute> },
      { path: "/my-tips", element: <PrivateRoute><MyTips></MyTips></PrivateRoute> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/tip/:id", element: <TipDetails></TipDetails>},
      { path: "/about", element: <AboutUs></AboutUs>},
      { path: "/contact", element: <Contact></Contact>},
      { path: "/support", element: <Support></Support>}
    ]
  },
  {
  path: "/dashboard",
  element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
  children: [
    { path: "/dashboard", element: <Overview /> },
    { path: "all-tips", element: <AllTips /> },
    { path: "my-tips", element: <DashboardMyTips /> },
    { path: "add-tip", element: <AddTip /> },
    { path: "profile", element: <Profile /> }
  ]
},
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);

export  default router;