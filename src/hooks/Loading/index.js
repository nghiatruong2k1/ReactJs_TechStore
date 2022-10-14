import { useContext } from "react";
import { LoadingContext } from "~/screens/Loading/provider";
export const useGetLoading = ()=>{
    return useContext(LoadingContext);
}