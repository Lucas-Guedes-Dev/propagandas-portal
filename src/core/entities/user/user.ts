export interface UserResponseType {
  active: boolean;
  is_admin: boolean;
  password: string;
  username: string;
}

export interface UserParam {
  id_user?: string;
  username?: string;
}
