import { get } from "../../clients/http-client";
import {
  PersonParam,
  PersonResponse,
} from "../../../core/entities/person/person";

export const getPerson = async (
  param: PersonParam
): Promise<PersonResponse[]> => {
  return await get<PersonResponse[]>(`/person/list`, param);
};
