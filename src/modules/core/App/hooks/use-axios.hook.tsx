import { useContext } from "react"
import { AppContext } from "../context/app.context"
import { AppContextInterface } from "../interfaces/app-context.interface";

export const useAxios = (): AppContextInterface => useContext(AppContext) as AppContextInterface;