import React from "react";

import { Dashboard, Lounge, Updates, UserList, Wallet } from "../pages";

const RouteArr = [

  //dashboard
  {
    path: "/",
    element: <Dashboard />,
  },
  //lounge
  {
    path: "/lounge",
    element: <Lounge />,
  },
  // user list 
  {
    path: "/users",
    element: <UserList />,
  },
  // wallet 
  {
    path: "/wallet",
    element: <Wallet />,
  },

   // Updates 
   {
    path: "/updates",
    element: <Updates />,
  },

];
export default RouteArr;
