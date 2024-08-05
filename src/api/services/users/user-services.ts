import { get, post } from "../../clients/http-client";
import { UserResponseType, UserParam } from "../../../core/entities/user/user";

export const GetUser = async (
  param: UserParam
): Promise<UserResponseType[]> => {
  return await get<UserResponseType[]>(`/auth/user/list`, param);
};

export const PostUser = async (data: UserResponseType) => {
  return await post(`/auth/user/create`, data);
};
