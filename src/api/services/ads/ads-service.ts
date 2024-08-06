import { AdsRequestParam, AdsResponse } from "../../../core/entities/ads/ads";
import { get } from "../../clients/http-client";

export const GetAds = async (
  param: AdsRequestParam
): Promise<AdsResponse[]> => {
  return await get<AdsResponse[]>(`/advertising/list`, param);
};
