import { api } from "./../../api";
import { ServerResponse } from "./../../../types/response";
import { LoginPayload } from "./../../../types/loginPayload";

export const response = async (payload: LoginPayload) => {
    const request = await api.get<ServerResponse>("/login", {
        data: payload,
    });
};
