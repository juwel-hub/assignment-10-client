import { createBrowserRouter } from "react-router-dom";
import Home from "../sheard/Home/Home";
import Root from "../Root/Root";
import AllTouristSport from "../Components/AllTouristSport/AllTouristSport";
import AddTouristSport from "../Components/AddTouristSport/AddTouristSport";
import MyList from "../Components/MyList/MyList";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import ViewDetails from "../Components/ViewDetails/ViewDetails";
import UpdateData from "../Components/UpdateData/UpdateData";
import TouristSport from "../Components/TouristSport/TouristSport";
import BlogArticle from "../Components/BlogArticle/BlogArticle";
const serverUrl = import.meta.env.VITE_serverUrl;

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allTouristSport",
        element: <AllTouristSport></AllTouristSport>,
        loader: () => fetch(`${serverUrl}/travels`),
      },
      {
        path: "/addTouristSport",
        element: (
          <PrivateRoute>
            <AddTouristSport />
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails />
          </PrivateRoute>
        ),
        loader: () => fetch(`${serverUrl}/travels`),
      },
      {
        path: "/updateData/:id",

        element: (
          <PrivateRoute>
            <UpdateData></UpdateData>
          </PrivateRoute>
        ),
      },
      {
        path: "/touristSport",
        element: <TouristSport></TouristSport>,
      },
      {
        path: "/blog",
        element: <BlogArticle></BlogArticle>,
      },
    ],
  },
]);
export default route;
