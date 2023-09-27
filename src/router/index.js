import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import PolarisPageContent from "../components/PolarisPageContent";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <PolarisPageContent />,
  },
]);
export default router;
