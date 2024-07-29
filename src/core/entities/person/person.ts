export interface PersonParam {
  id?: string;
  is_client?: boolean;
  is_employe?: boolean;
  is_driver?: boolean;
  cpf_cnpj?: string;
}

export interface PersonResponse {
  active: boolean;
  cpf_cnpj?: string;
  email?: string;
  id?: number;
  is_client?: boolean;
  is_driver?: boolean;
  is_employee?: boolean;
  neighborhood?: string;
  name?: string;
  number?: string;
  phone?: string;
  road?: string;
  state?: string;
  city?: string;
  user_id: number | null;
}

export interface PutResponse {
  success: boolean;
}
