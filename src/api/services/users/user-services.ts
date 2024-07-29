import { get } from "../../clients/http-client";
import { UserResponseType, UserParam } from "../../../core/entities/user/user";

export const GetUser = async (
  param: UserParam
): Promise<UserResponseType[]> => {
  return await get<UserResponseType[]>(`/auth/user`, param);
};
