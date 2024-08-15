export interface AdsRequestParam {
  id?: string;
  id_person?: number;
  name?: string;
  active?: boolean;
}

export interface AdsResponse {
  id: number;
  active: boolean;
  image: string;
  name: string;
  person_id: number;
  video_url: string;
  date_start: string;
  date_end: string;
  description: string;
}

export interface DataAds {
  active: boolean;
  date_end: string | null;
  date_start: string | null;
  description?: string | null;
  image: string;
  name: string;
  person_id: number;
  video_url?: string | null;
}
