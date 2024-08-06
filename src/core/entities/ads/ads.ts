export interface AdsRequestParam {
  id_person?: number;
  name?: string;
  active?: boolean;
}

export interface AdsResponse {
  active: boolean;
  image: string;
  name: string;
  person_id: number;
  video_url: string;
}
