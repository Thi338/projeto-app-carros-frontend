import axios, { AxiosPromise } from "axios";
import { CarData } from "../interface/CarData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "https://projeto-app-carros-backend-production.up.railway.app"

const postData = async (data: CarData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/car', data);
    return response;
}

export function useCarDataMutate() {
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['car-data'])
        }
    })

    return mutate;
}