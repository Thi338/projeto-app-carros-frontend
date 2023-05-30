import axios, { AxiosPromise } from "axios";
import { CarData } from "../interface/CarData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://projeto-app-carros-backend-production.up.railway.app"

const fetchData = async (): AxiosPromise<CarData[]> => {
    const response = axios.get(API_URL + '/car')
    return response;
}

export function useCarData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['car-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}