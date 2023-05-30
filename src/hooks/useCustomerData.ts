import axios, { AxiosPromise } from "axios"
import { CustomerData } from "../interface/CustomerData"
import { useQuery } from "@tanstack/react-query"

const API_URL = 'https://projeto-app-carros-backend-production.up.railway.app';

const fetchData = async (): AxiosPromise<CustomerData[]> => {
    const response = axios.get(API_URL + '/customer');
    return response;
}

export function useCustomerData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['customer-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}