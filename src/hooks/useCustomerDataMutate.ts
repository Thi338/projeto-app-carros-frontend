import axios, { AxiosPromise } from "axios"
import { CustomerData } from "../interface/CustomerData"
import {  useMutation,  useQueryClient } from "@tanstack/react-query"

const API_URL = 'http://localhost:8080'

const postData = async (data: CustomerData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/customer', data)
    return response
}

export function useCustomerDataMutate() {

    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['customer-data'])
        }
    })

    return mutate;
}