export interface AuthData {
  username: string;
  password: string;
}

export interface AuthResponse {
  access: boolean;
  access_token: string;
}
