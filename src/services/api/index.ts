import axios from "axios";
import { ENVS } from "./../../../.env";

export const api = axios.create({
    baseURL: ENVS.API_URL,
});
