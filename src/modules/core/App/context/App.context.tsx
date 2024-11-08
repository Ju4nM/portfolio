import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";
import { createContext, ReactNode, useState } from "react";
import { AppContextInterface } from "../interfaces/app-context.interface";
import LoadingScreen from "../../../shared/components/loading-screen.component";

export const AppContext = createContext<AppContextInterface | {}>({});

export function AppProvider ({ children }: { children: ReactNode }) {
  
  const [isLoading, setIsLoading] = useState<number>(0); // cargando => mayor que cero | no cargando => igual o menor que cero

  const axiosSettings: CreateAxiosDefaults = {
    baseURL: import.meta.env.VITE_API_URL
  }
  
  const axiosInstance: AxiosInstance = axios.create(axiosSettings);
  
  axiosInstance.interceptors.request.use(config => {
    setTimeout(() => {
      setIsLoading(prev => prev + 1);
    }, 300);
    return config;
  });
  
  axiosInstance.interceptors.response.use(
    async (response) => {
      setIsLoading(prev => prev - 1);
      return response;
    },
    async (error) => {
      console.log(error);
      setIsLoading(prev => prev - 1);
    }
  );

  return (
    <AppContext.Provider value = {{ axios: axiosInstance }}>
      { children }
      <LoadingScreen isVisible = { isLoading > 0 } />
      {/* { isLoading > 0 && <LoadingScreen /> } */}
      {/* { isLoading > 0 ? <LoadingScreen /> : children } */}
    </AppContext.Provider>
  );
}