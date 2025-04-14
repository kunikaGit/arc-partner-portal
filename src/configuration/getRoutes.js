import React from "react";

import { Dashboard, Insight } from "../pages";

const RouteArr = [

  // {
  //   name: "Home",
  //   path: "/",
  //   key: "home",
  //   route: "/home",
  //   element: <Home />,
  // },

  //Insight
  {
    name: "Insight",
    path: "/insight",
    key: "insight",
    route: "/insight",
    element: <Insight />,
  },

  //dashboard
  {
    path: "/",
    element: <Dashboard />,
  },
 
];
export default RouteArr;
