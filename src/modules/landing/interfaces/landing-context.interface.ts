import { LandingDataInterface } from "./landing-data.interface";

export interface LandingContextInterface {
  fetchData: () => Promise<{ data: string }>;
  landingData: LandingDataInterface;
}