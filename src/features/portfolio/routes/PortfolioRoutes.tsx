import { RouteObject } from "react-router-dom";
import { LandingPage } from "./Landing";
import { Resume } from "./Resume";

export const PortfolioRoutes: RouteObject[] = [
  {
    index: true,
    element: (
      <div>
        <LandingPage />
      </div>
    ),
  },
  {
    path: "/resume",
    element: <Resume />,
  },
];
