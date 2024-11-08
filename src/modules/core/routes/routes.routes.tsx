import { LandingProvider } from "../../landing/context/landing.context";
import LandingPage from "../../landing/page/landing.page";

export const routes = [
	{
		path: "/",
		element: <LandingProvider><LandingPage /></LandingProvider>,
	},
];
