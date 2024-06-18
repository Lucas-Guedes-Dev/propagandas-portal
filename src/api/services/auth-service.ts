import { post } from "../clients/http-client";
import { AuthData, AuthResponse } from "../../core/entities/auth";

export const fecthAuthLogin = async (data: AuthData): Promise<AuthResponse> => {
  return await post<AuthResponse>(`/auth/login`, data);
};
