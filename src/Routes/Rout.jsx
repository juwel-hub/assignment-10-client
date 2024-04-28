import { createBrowserRouter } from "react-router-dom";
import Home from "../sheard/Home/Home";
import Root from "../Root/Root";
import AllTouristSport from "../Components/AllTouristSport/AllTouristSport";
import AddTouristSport from "../Components/AddTouristSport/AddTouristSport";
import MyList from "../Components/MyList/MyList";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allTouristSport",
        element: <AllTouristSport></AllTouristSport>,
      },
      {
        path: "/addTouristSport",
        element: (
          <PrivateRoute>
            <AddTouristSport></AddTouristSport>
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        element: <MyList></MyList>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default route;
