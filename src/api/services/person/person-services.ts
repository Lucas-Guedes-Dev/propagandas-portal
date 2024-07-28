import { get, put } from "../../clients/http-client";
import {
  PersonParam,
  PersonResponse,
  PutResponse,
} from "../../../core/entities/person/person";

export const getPerson = async (
  param: PersonParam
): Promise<PersonResponse[]> => {
  return await get<PersonResponse[]>(`/person/list`, param);
};

export const PutPerson = async (
  data: PersonResponse,
  param: PersonParam
): Promise<PutResponse> => {
  return await put<PutResponse>(`/person/update`, data, param);
};
