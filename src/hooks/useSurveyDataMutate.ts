import axios, { AxiosPromise } from "axios";
import { SurveyData } from "../interface/SurveyData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "https://projeto-app-carros-backend-production.up.railway.app";

const postData = async (data: SurveyData):AxiosPromise<any> => {
    const response = axios.post(API_URL + "/survey", data);
    return response;
}

export function useSurveyDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['survey-data'])
        }
    })

    return mutate;
}