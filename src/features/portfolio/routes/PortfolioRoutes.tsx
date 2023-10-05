import { RouteObject } from "react-router-dom";
import { LandingPage } from "./Landing";

export const PortfolioRoutes: RouteObject[] = [
  {
    index: true,
    element: (
      <div>
        <LandingPage />
      </div>
    ),
  },
];
