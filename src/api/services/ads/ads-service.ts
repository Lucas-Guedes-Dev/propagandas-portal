import {
  AdsRequestParam,
  AdsResponse,
  DataAds,
} from "../../../core/entities/ads/ads";
import { get, post } from "../../clients/http-client";

export const GetAds = async (
  param: AdsRequestParam
): Promise<AdsResponse[]> => {
  return await get<AdsResponse[]>(`/advertising/list`, param);
};

export const CreateAds = async (data: DataAds) => {
  return await post(`/advertising/create`, data);
};
