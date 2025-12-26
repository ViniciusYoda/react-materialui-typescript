import { AxiosResponse } from "axios";
import exp from "constants";

export const responseInterceptor = (response: AxiosResponse) => {
    return response;
};