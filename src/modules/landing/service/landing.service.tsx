import { AxiosInstance } from "axios";
import { LandingDataInterface } from "../interfaces/landing-data.interface";

export function Landingservice (axios: AxiosInstance) {
  const endpointSuffix: string = "landing"
  
  async function fetchData (): Promise<LandingDataInterface> {
    const response = await axios.get<LandingDataInterface>(endpointSuffix);
    return response.data;
  }

  return {
    fetchData
  }
}