import { useContext } from "react";
import { LandingContext } from "../context/landing.context";
import { LandingContextInterface } from "../interfaces/landing-context.interface";

export const useLanding = () => useContext(LandingContext) as LandingContextInterface;