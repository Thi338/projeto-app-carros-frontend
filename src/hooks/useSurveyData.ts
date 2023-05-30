import axios, { AxiosPromise } from "axios";
import { SurveyData } from "../interface/SurveyData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://projeto-app-carros-backend-production.up.railway.app"

const fetchData = async ():AxiosPromise<SurveyData[]> => {
    const response = axios.get(API_URL + "/survey");
    return response;
}

export function useSurveyData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['survey-data'],
        retry: 2,
    })

    return {
        ...query,
        data: query.data?.data
    }
}