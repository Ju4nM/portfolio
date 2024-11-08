// import { createHashRouter, RouterProvider } from "react-router-dom";
import { AppProvider } from "./core/app/context/app.context";
// import { routes } from "./core/routes/routes.routes";
import { LandingProvider } from "./landing/context/landing.context";
import LandingPage from "./landing/page/landing.page";

export default function Index() {
  
  // const router = createHashRouter(routes)

  return (
    <AppProvider>
      {/* <RouterProvider router = { router } /> */}
      <LandingProvider><LandingPage/></LandingProvider>
    </AppProvider>
  )
}
