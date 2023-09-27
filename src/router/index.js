import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import PolarisPageContent from "../components/PolarisPageContent";
import TextShadow from "../components/TextShadow";
import TextShadown from "../components/PolarisPageContent/index copy";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <PolarisPageContent />,
  },
  {
    path: "/textShadown",
    element: <TextShadow />,
  },
]);
export default router;
