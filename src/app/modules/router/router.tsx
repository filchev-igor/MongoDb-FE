import { createBrowserRouter } from "react-router-dom";
import { PATH_NAMES } from "./constants.ts";
import PageLayout from "../../components/PageLayout/PageLayout.tsx";
import HomePage from "../../pages/HomePage/HomePage.tsx";
import ConferencesPage from "../../pages/ConferencesPage/ConferencesPage.tsx";

export const router = createBrowserRouter([
  {
    path: PATH_NAMES.homePage,
    element: <PageLayout />,
    children: [
      {
        path: PATH_NAMES.homePage,
        element: <HomePage />,
        index: true,
      },
      {
        path: PATH_NAMES.conferencesPage,
        element: <ConferencesPage />,
      },
    ],
  },
]);
